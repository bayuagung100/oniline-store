const db = require("../../models");
const Table = require("../../models/user.js")(db.sequelize, db.Sequelize);
const Role = require("../../models/role.js")(db.sequelize, db.Sequelize);
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

Role.hasMany(Table, { foreignKey: 'id' })
Table.belongsTo(Role, { foreignKey: 'role_id' })

exports.auth = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    Table.findOne({
        where: {
            email: email,
            // password: h,ash
        },
        include: [Role],
    })
        .then(user => {
            if (!user) {
                return res.status(404).send("User Not found.");
            }

            var passwordIsValid = bcrypt.compareSync(
                password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send("Invalid Password!");
            }

            // Role.findOne({
            //     where: {
            //         id: user.role_id,
            //     },
            // }).then(role => {
            //     // return role.role
            //     res.send({
            //         id: user.id,
            //         firstname: user.firstname,
            //         lastname: user.lastname,
            //         email: user.email,
            //         role_id: user.role_id,
            //         role: role.role
            //     });
            // })
            res.send({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role_id: user.role_id,
                role: user.Role.role
            });

        })
        .catch(err => {
            res.status(500).send(err.message);
        });
};

exports.DtUser = (req, res) => {
    Table.findAll({ include: [Role] })
        .then(data => {
            let newData = []
            var no = 1;
            data.forEach(element => {
                var id = element.id
                var nama = `${element.firstname} ${element.lastname}`
                var email = element.email
                var role = element.Role.role
                newData.push([
                    no = no,
                    nama = nama,
                    email = email,
                    role = role,
                    id = id,
                ])
                no++;
            });
            res.send({
                data: newData
            });
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
}