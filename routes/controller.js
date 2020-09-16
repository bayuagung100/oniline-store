var response = require('./res');
var koneksi = require('./config');
var express = require('express');

//form-data
var formidable = require('formidable');
var mv = require('mv');
//end form-data

function kapital(str){
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// api v1

/* GET home page. */
exports.index = function (req, res) {
    res.render('index', { title: 'Api Online Store' });
};

exports.city = function (req, res) {
    koneksi.query("SELECT * FROM city ORDER BY id ASC ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }

    });
};

exports.province = function (req, res) {
    koneksi.query("SELECT * FROM province ORDER BY id ASC ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }

    });
};

exports.subdistrict = function (req, res) {
    koneksi.query("SELECT * FROM subdistrict ORDER BY id ASC ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }

    });
};

exports.categorylist = function (req, res) {
    koneksi.query("SELECT * FROM category_product ORDER BY id ASC ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            var Obj = [];
            rows.forEach(function (element, index) { 
                var name = element.name
                Obj.push(
                    name,
                )
            }); 
            response.optionList(Obj, res);
        }

    });
};

exports.colorlist = function (req, res) {
    koneksi.query("SELECT * FROM color_product ORDER BY id ASC ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            var Obj = [];
            rows.forEach(function (element, index) { 
                var name = element.name
                Obj.push(
                    name,
                )
            }); 
            response.optionList(Obj, res);
        }

    });
};

exports.sizelist = function (req, res) {
    koneksi.query("SELECT * FROM size_product ORDER BY id ASC ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            var Obj = [];
            rows.forEach(function (element, index) { 
                var name = element.name
                Obj.push(
                    name,
                )
            }); 
            response.optionList(Obj, res);
        }

    });
};



exports.infoweb = function (req, res) {
    koneksi.query("SELECT * FROM setting_infoweb ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }

    });
};


//menggunakan x-www-form-urlencoded
exports.updateinfoweb = function (req, res) {
    var id = req.body.id;
    var judul = req.body.judul;
    var deskripsi = req.body.deskripsi;
    var alamat = req.body.alamat;
    var provinsi = req.body.provinsi;
    var kabupaten = req.body.kabupaten;
    var kecamatan = req.body.kecamatan;
    var kode_pos = req.body.kode_pos;

    koneksi.query("UPDATE setting_infoweb SET judul_website=?, deskripsi_website=?, alamat=? , province=?, city=?, subdistrict=?, postal_code=? WHERE id=?", [judul, deskripsi, alamat, provinsi, kabupaten, kecamatan, kode_pos, id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil update", res);
        }
    });
};

exports.sosmed = function (req, res) {
    koneksi.query("SELECT * FROM setting_sosmed ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }

    });
};

//menggunakan x-www-form-urlencoded
exports.updatesosmed = function (req, res) {
    var id = req.body.id;
    var email = req.body.email;
    var whatsapp = req.body.whatsapp;
    var instagram = req.body.instagram;

    koneksi.query("UPDATE setting_sosmed SET email=?, whatsapp=?, instagram=? WHERE id=?", [email, whatsapp, instagram, id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil update", res);
        }
    });
};

exports.banklist = function (req, res) {
    koneksi.query("SELECT * FROM setting_bank ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }

    });
};

exports.addbanklist = function (req, res) {
    var nama_bank = req.body.nama_bank;
    var no_rekening = req.body.no_rekening;
    var nama_rekening = req.body.nama_rekening;

    koneksi.query("INSERT INTO setting_bank (bank_name, bank_rekening, bank_name_rekening) VALUES (?, ?, ?)", [nama_bank, no_rekening, nama_rekening], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.banklistbyid = function (req, res) {
    var id = req.params.id;
    koneksi.query("SELECT * FROM setting_bank WHERE id=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.updatebanklist = function (req, res) {
    var id = req.body.id;
    var bank_name = req.body.bank_name;
    var bank_rekening = req.body.bank_rekening;
    var bank_name_rekening = req.body.bank_name_rekening;

    koneksi.query("UPDATE setting_bank SET bank_name=?, bank_rekening=?, bank_name_rekening=? WHERE id=?", [bank_name, bank_rekening, bank_name_rekening, id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil update", res);
        }
    });
};

exports.deletebanklist = function (req, res) {
    var id = req.params.id;
    koneksi.query("DELETE FROM setting_bank WHERE id=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil delete bank", res);
        }
    });
};

exports.memberlistbyid = function (req, res) {
    var id = req.params.id;
    koneksi.query("SELECT * FROM member WHERE id=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.messagelistbyid = function (req, res) {
    var id = req.params.id;
    koneksi.query("SELECT * FROM contact WHERE id=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};



exports.addproduk = function (req, res) {
    var form = new formidable.IncomingForm();
    // console.log(form);
    // manangani upload file
    form.parse(req, function (err, fields, files) {
        var nama_produk = fields.nama_produk;
        var deskripsi_produk = fields.deskripsi_produk;
        var kategori = fields.kategori;
        var arr_kategori = kategori.split(',');
        var warna = fields.warna;
        var arr_warna = warna.split(',');
        var ukuran = fields.ukuran;
        var arr_ukuran = ukuran.split(',');
        var harga = fields.harga;
        var stok = fields.stok;
        var berat = fields.berat;
        var kondisi = fields.kondisi;
        var foto_utama = files.foto_utama;
        var foto_utama_name = files.foto_utama.name;
        var foto_utama_path = files.foto_utama.path;
        var foto_utama_newpath = "./public/images/" + foto_utama_name.replace(/\s+/g, '-').toLowerCase();
        var foto_utama_url = "images/" + foto_utama_name.replace(/\s+/g, '-').toLowerCase();
        var foto1 = files.foto1;
        var foto2 = files.foto2;
        var foto3 = files.foto3;
        var foto4 = files.foto4;
        var foto5 = files.foto5;
        var foto6 = files.foto6;
        var foto7 = files.foto7;
        var foto8 = files.foto8;
        // response.ok(files, res);

        //insert kategori, warna, ukuran jika datanya 0
        arr_kategori.forEach(value => {
            koneksi.query("SELECT * FROM category_product WHERE name=?", [value], function (error, rows, fields) {
                if (error) {
                    console.log(error);
                } else {
                    var numRows = rows.length;
                    if (numRows===0) {
                        koneksi.query("INSERT INTO category_product (name) VALUES (?)", [value], function (error, rows, fields) {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                }
            });
        });
        arr_warna.forEach(value => {
            koneksi.query("SELECT * FROM color_product WHERE name=?", [value], function (error, rows, fields) {
                if (error) {
                    console.log(error);
                } else {
                    var numRows = rows.length
                    if (numRows===0) {
                        koneksi.query("INSERT INTO color_product (name) VALUES (?)", [value], function (error, rows, fields) {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                }
            });
        });
        arr_ukuran.forEach(value => {
            koneksi.query("SELECT * FROM size_product WHERE name=?", [value], function (error, rows, fields) {
                if (error) {
                    console.log(error);
                } else {
                    var numRows = rows.length
                    if (numRows===0) {
                        koneksi.query("INSERT INTO size_product (name) VALUES (?)", [value], function (error, rows, fields) {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                }
            });
        });
        // koneksi.query("SELECT * FROM category_product WHERE name=?", [id], function (error, rows, fields) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         response.ok(rows, res);
        //     }
        // });

        koneksi.query("SELECT * FROM product WHERE nama_produk=?", [kapital(nama_produk)], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                var numRows = rows.length
                if (numRows===0) {
                    // pindahakan file yang telah di-upload
                    mv(foto_utama_path, foto_utama_newpath, function (err) {
                        if (err) { 
                            console.log(err); 
                        } else {
                            if (foto1 !== undefined) {
                                var foto1_name = files.foto1.name;
                                var foto1_path = files.foto1.path;
                                var foto1_newpath = "./public/images/" + foto1_name.replace(/\s+/g, '-').toLowerCase();
                                var foto1_url = "images/" + foto1_name.replace(/\s+/g, '-').toLowerCase();
                                mv(foto1_path, foto1_newpath, function (err) {
                                    if (err) { 
                                        console.log(err); 
                                    }
                                })
                            } else {
                                var foto1_name = null;
                                var foto1_url = null;
                            }
                            if (foto2!==undefined) {
                                var foto2_name = files.foto2.name;
                                var foto2_path = files.foto2.path;
                                var foto2_newpath = "./public/images/" + foto2_name.replace(/\s+/g, '-').toLowerCase();
                                var foto2_url = "images/" + foto2_name.replace(/\s+/g, '-').toLowerCase();
                                mv(foto2_path, foto2_newpath, function (err) {
                                    if (err) { 
                                        console.log(err); 
                                    }
                                })
                            } else {
                                var foto2_name = null;
                                var foto2_url = null;
                            }
                            if (foto3!==undefined) {
                                var foto3_name = files.foto3.name;
                                var foto3_path = files.foto3.path;
                                var foto3_newpath = "./public/images/" + foto3_name.replace(/\s+/g, '-').toLowerCase();
                                var foto3_url = "images/" + foto3_name.replace(/\s+/g, '-').toLowerCase();
                                mv(foto3_path, foto3_newpath, function (err) {
                                    if (err) { 
                                        console.log(err); 
                                    }
                                })
                            } else {
                                var foto3_name = null;
                                var foto3_url = null;
                            }
                            if (foto4!==undefined) {
                                var foto4_name = files.foto4.name;
                                var foto4_path = files.foto4.path;
                                var foto4_newpath = "./public/images/" + foto4_name.replace(/\s+/g, '-').toLowerCase();
                                var foto4_url = "images/" + foto4_name.replace(/\s+/g, '-').toLowerCase();
                                mv(foto4_path, foto4_newpath, function (err) {
                                    if (err) { 
                                        console.log(err); 
                                    }
                                })
                            } else {
                                var foto4_name = null;
                                var foto4_url = null;
                            }
                            if (foto5!==undefined) {
                                var foto5_name = files.foto5.name;
                                var foto5_path = files.foto5.path;
                                var foto5_newpath = "./public/images/" + foto5_name.replace(/\s+/g, '-').toLowerCase();
                                var foto5_url = "images/" + foto5_name.replace(/\s+/g, '-').toLowerCase();
                                mv(foto5_path, foto5_newpath, function (err) {
                                    if (err) { 
                                        console.log(err); 
                                    }
                                })
                            } else {
                                var foto5_name = null;
                                var foto5_url = null;
                            }
                            if (foto6!==undefined) {
                                var foto6_name = files.foto6.name;
                                var foto6_path = files.foto6.path;
                                var foto6_newpath = "./public/images/" + foto6_name.replace(/\s+/g, '-').toLowerCase();
                                var foto6_url = "images/" + foto6_name.replace(/\s+/g, '-').toLowerCase();
                                mv(foto6_path, foto6_newpath, function (err) {
                                    if (err) { 
                                        console.log(err); 
                                    }
                                })
                            } else {
                                var foto6_name = null;
                                var foto6_url = null;
                            }
                            if (foto7!==undefined) {
                                var foto7_name = files.foto7.name;
                                var foto7_path = files.foto7.path;
                                var foto7_newpath = "./public/images/" + foto7_name.replace(/\s+/g, '-').toLowerCase();
                                var foto7_url = "images/" + foto7_name.replace(/\s+/g, '-').toLowerCase();
                                mv(foto7_path, foto7_newpath, function (err) {
                                    if (err) { 
                                        console.log(err); 
                                    }
                                })
                            } else {
                                var foto7_name = null;
                                var foto7_url = null;
                            }
                            if (foto8!==undefined) {
                                var foto8_name = files.foto8.name;
                                var foto8_path = files.foto8.path;
                                var foto8_newpath = "./public/images/" + foto8_name.replace(/\s+/g, '-').toLowerCase();
                                var foto8_url = "images/" + foto8_name.replace(/\s+/g, '-').toLowerCase();
                                mv(foto8_path, foto8_newpath, function (err) {
                                    if (err) { 
                                        console.log(err); 
                                    }
                                })
                            } else {
                                var foto8_name = null;
                                var foto8_url = null;
                            }
                            
                            koneksi.query("INSERT INTO product (nama_produk, deskripsi_produk, kategori, warna, ukuran, harga, stok, berat, kondisi, foto_utama, foto_utama_url, foto1, foto1_url, foto2, foto2_url, foto3, foto3_url, foto4, foto4_url, foto5, foto5_url, foto6, foto6_url, foto7, foto7_url, foto8, foto8_url) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [kapital(nama_produk), deskripsi_produk, kategori, warna, ukuran, harga, stok, berat, kondisi, foto_utama_name,foto_utama_url, foto1_name, foto1_url, foto2_name, foto2_url, foto3_name, foto3_url, foto4_name, foto4_url, foto5_name, foto5_url, foto6_name, foto6_url, foto7_name, foto7_url, foto8_name, foto8_url], function (error, rows, fields) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    response.produk('Success Tambah Produk', res);
                                }
                            });
                        }
                    });
                } else {
                    //status 406 = not acceptable
                    response.produk('Nama Produk Sudah Ada', res, 406);
                }
            }
        });

        

        
    });
};

exports.produkbyid = function (req, res) {
    var id = req.params.id;
    koneksi.query("SELECT * FROM product WHERE id=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}

exports.updateproduk = function (req, res) {
    var form = new formidable.IncomingForm();

    // var asd = new formidable.IncomingForm().parse(req)
    //     .on('file', function(name, file) {
    //         console.log('Got file:', name);
    //         // console.log('Got file dt:', file);
    //     })
    //     .on('field', function(name, field) {
    //         console.log('Got a name:', name);
    //         console.log('Got a field:', field);
    //     })
    //     .on('error', function(err) {
    //         next(err);
    //     })
        // .on('end', function() {
        //     res.end();
        // });

    // console.log(asd);


    form.parse(req, function (err, fields, files) {
        var id = fields.id;
        var nama_produk = fields.nama_produk;
        var deskripsi_produk = fields.deskripsi_produk;
        var kategori = fields.kategori;
        var arr_kategori = kategori.split(',');
        var warna = fields.warna;
        var arr_warna = warna.split(',');
        var ukuran = fields.ukuran;
        var arr_ukuran = ukuran.split(',');
        var harga = fields.harga;
        var stok = fields.stok;
        var berat = fields.berat;
        var kondisi = fields.kondisi;
        var foto_utama = fields.foto_utama;
        var foto1 = fields.foto1;
        var foto2 = fields.foto2;
        var foto3 = fields.foto3;
        var foto4 = fields.foto4;
        var foto5 = fields.foto5;
        var foto6 = fields.foto6;
        var foto7 = fields.foto7;
        var foto8 = fields.foto8;

        //insert kategori, warna, ukuran jika datanya 0
        arr_kategori.forEach(value => {
            koneksi.query("SELECT * FROM category_product WHERE name=?", [value], function (error, rows, fields) {
                if (error) {
                    console.log(error);
                } else {
                    var numRows = rows.length;
                    if (numRows===0) {
                        koneksi.query("INSERT INTO category_product (name) VALUES (?)", [value], function (error, rows, fields) {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                }
            });
        });
        arr_warna.forEach(value => {
            koneksi.query("SELECT * FROM color_product WHERE name=?", [value], function (error, rows, fields) {
                if (error) {
                    console.log(error);
                } else {
                    var numRows = rows.length
                    if (numRows===0) {
                        koneksi.query("INSERT INTO color_product (name) VALUES (?)", [value], function (error, rows, fields) {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                }
            });
        });
        arr_ukuran.forEach(value => {
            koneksi.query("SELECT * FROM size_product WHERE name=?", [value], function (error, rows, fields) {
                if (error) {
                    console.log(error);
                } else {
                    var numRows = rows.length
                    if (numRows===0) {
                        koneksi.query("INSERT INTO size_product (name) VALUES (?)", [value], function (error, rows, fields) {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                }
            });
        });

        //validasi gambar
        koneksi.query("SELECT * FROM product WHERE id=?", [id], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                koneksi.query("SELECT * FROM product WHERE id!=? AND nama_produk=?", [id, kapital(nama_produk)], function (error2, rows2, fields2) {
                    if (error2) {
                        console.log(error2);
                    } else {
                        var numRows = rows2.length
                        if (numRows===0) {
                            // rows.forEach(function (element, index) { 
                                //jika foto sama
                                if (rows[0].foto_utama === foto_utama) {
                                    console.log("foto_utama sama");
                                    console.log(foto_utama);
                                    var foto_utama_name = rows[0].foto_utama;
                                    var foto_utama_url = rows[0].foto_utama_url;
                                } else {
                                    console.log("foto_utama beda")
                                    var foto_utama_name = files.foto_utama.name;
                                    var foto_utama_path = files.foto_utama.path;
                                    var foto_utama_newpath = "./public/images/" + foto_utama_name.replace(/\s+/g, '-').toLowerCase();
                                    var foto_utama_url = "images/" + foto_utama_name.replace(/\s+/g, '-').toLowerCase();
                                    mv(foto_utama_path, foto_utama_newpath, function (err) {
                                        if (err) { 
                                            console.log(err); 
                                        }
                                    })
                                }
                                if (rows[0].foto1 === foto1) {
                                    console.log("foto1 sama")
                                    console.log(foto1)
                                    var foto1_name = rows[0].foto1;
                                    var foto1_url = rows[0].foto1_url;
                                } else if (foto1 === "undefined"){ //jika foto jadi kosong/dihapus
                                    console.log("foto1 kosong")
                                    var foto1_name = null;
                                    var foto1_url = null;
                                } else {
                                    console.log("foto1 beda")
                                    var foto1_name = files.foto1.name;
                                    var foto1_path = files.foto1.path;
                                    var foto1_newpath = "./public/images/" + foto1_name.replace(/\s+/g, '-').toLowerCase();
                                    var foto1_url = "images/" + foto1_name.replace(/\s+/g, '-').toLowerCase();
                                    mv(foto1_path, foto1_newpath, function (err) {
                                        if (err) { 
                                            console.log(err); 
                                        }
                                    })
                                }
                                if (rows[0].foto2 === foto2) {
                                    console.log("foto2 sama")
                                    console.log(foto2)
                                    var foto2_name = rows[0].foto2;
                                    var foto2_url = rows[0].foto2_url;
                                } else if (foto2 === "undefined"){ //jika foto jadi kosong/dihapus
                                    console.log("foto2 kosong")
                                    var foto2_name = null;
                                    var foto2_url = null;
                                } else {
                                    console.log("foto2 beda")
                                    var foto2_name = files.foto2.name;
                                    var foto2_path = files.foto2.path;
                                    var foto2_newpath = "./public/images/" + foto2_name.replace(/\s+/g, '-').toLowerCase();
                                    var foto2_url = "images/" + foto2_name.replace(/\s+/g, '-').toLowerCase();
                                    mv(foto2_path, foto2_newpath, function (err) {
                                        if (err) { 
                                            console.log(err); 
                                        }
                                    })
                                }
                                if (rows[0].foto3 === foto3) {
                                    console.log("foto3 sama")
                                    console.log(foto3)
                                    var foto3_name = rows[0].foto3;
                                    var foto3_url = rows[0].foto3_url;
                                } else if (foto3 === "undefined"){ //jika foto jadi kosong/dihapus
                                    console.log("foto3 kosong")
                                    var foto3_name = null;
                                    var foto3_url = null;
                                } else {
                                    console.log("foto3 beda")
                                    var foto3_name = files.foto3.name;
                                    var foto3_path = files.foto3.path;
                                    var foto3_newpath = "./public/images/" + foto3_name.replace(/\s+/g, '-').toLowerCase();
                                    var foto3_url = "images/" + foto3_name.replace(/\s+/g, '-').toLowerCase();
                                    mv(foto3_path, foto3_newpath, function (err) {
                                        if (err) { 
                                            console.log(err); 
                                        }
                                    })
                                }
                                if (rows[0].foto4 === foto4) {
                                    console.log("foto4 sama")
                                    console.log(foto4)
                                    var foto4_name = rows[0].foto4;
                                    var foto4_url = rows[0].foto4_url;
                                } else if (foto4 === "undefined"){ //jika foto jadi kosong/dihapus
                                    console.log("foto4 kosong")
                                    var foto4_name = null;
                                    var foto4_url = null;
                                } else {
                                    console.log("foto4 beda")
                                    var foto4_name = files.foto4.name;
                                    var foto4_path = files.foto4.path;
                                    var foto4_newpath = "./public/images/" + foto4_name.replace(/\s+/g, '-').toLowerCase();
                                    var foto4_url = "images/" + foto4_name.replace(/\s+/g, '-').toLowerCase();
                                    mv(foto4_path, foto4_newpath, function (err) {
                                        if (err) { 
                                            console.log(err); 
                                        }
                                    })
                                }
                                if (rows[0].foto5 === foto5) {
                                    console.log("foto5 sama")
                                    console.log(foto5)
                                    var foto5_name = rows[0].foto5;
                                    var foto5_url = rows[0].foto5_url;
                                } else if (foto5 === "undefined"){ //jika foto jadi kosong/dihapus
                                    console.log("foto5 kosong")
                                    var foto5_name = null;
                                    var foto5_url = null;
                                } else {
                                    console.log("foto5 beda")
                                    var foto5_name = files.foto5.name;
                                    var foto5_path = files.foto5.path;
                                    var foto5_newpath = "./public/images/" + foto5_name.replace(/\s+/g, '-').toLowerCase();
                                    var foto5_url = "images/" + foto5_name.replace(/\s+/g, '-').toLowerCase();
                                    mv(foto5_path, foto5_newpath, function (err) {
                                        if (err) { 
                                            console.log(err); 
                                        }
                                    })
                                }
                                if (rows[0].foto6 === foto6) {
                                    console.log("foto6 sama")
                                    console.log(foto6)
                                    var foto6_name = rows[0].foto6;
                                    var foto6_url = rows[0].foto6_url;
                                } else if (foto6 === "undefined"){ //jika foto jadi kosong/dihapus
                                    console.log("foto6 kosong")
                                    var foto6_name = null;
                                    var foto6_url = null;
                                } else {
                                    console.log("foto6 beda")
                                    var foto6_name = files.foto6.name;
                                    var foto6_path = files.foto6.path;
                                    var foto6_newpath = "./public/images/" + foto6_name.replace(/\s+/g, '-').toLowerCase();
                                    var foto6_url = "images/" + foto6_name.replace(/\s+/g, '-').toLowerCase();
                                    mv(foto6_path, foto6_newpath, function (err) {
                                        if (err) { 
                                            console.log(err); 
                                        }
                                    })
                                }
                                if (rows[0].foto7 === foto7) {
                                    console.log("foto7 sama")
                                    console.log(foto7)
                                    var foto7_name = rows[0].foto7;
                                    var foto7_url = rows[0].foto7_url;
                                } else if (foto7 === "undefined"){ //jika foto jadi kosong/dihapus
                                    console.log("foto7 kosong")
                                    var foto7_name = null;
                                    var foto7_url = null;
                                } else {
                                    console.log("foto7 beda")
                                    var foto7_name = files.foto7.name;
                                    var foto7_path = files.foto7.path;
                                    var foto7_newpath = "./public/images/" + foto7_name.replace(/\s+/g, '-').toLowerCase();
                                    var foto7_url = "images/" + foto7_name.replace(/\s+/g, '-').toLowerCase();
                                    mv(foto7_path, foto7_newpath, function (err) {
                                        if (err) { 
                                            console.log(err); 
                                        }
                                    })
                                }
                                if (rows[0].foto8 === foto8) {
                                    console.log("foto8 sama")
                                    console.log(foto8)
                                    var foto8_name = rows[0].foto8;
                                    var foto8_url = rows[0].foto8_url;
                                } else if (foto8 === "undefined"){ //jika foto jadi kosong/dihapus
                                    console.log("foto8 kosong")
                                    var foto8_name = null;
                                    var foto8_url = null;
                                } else {
                                    console.log("foto8 beda")
                                    var foto8_name = files.foto8.name;
                                    var foto8_path = files.foto8.path;
                                    var foto8_newpath = "./public/images/" + foto8_name.replace(/\s+/g, '-').toLowerCase();
                                    var foto8_url = "images/" + foto8_name.replace(/\s+/g, '-').toLowerCase();
                                    mv(foto8_path, foto8_newpath, function (err) {
                                        if (err) { 
                                            console.log(err); 
                                        }
                                    })
                                }
                            // })
            
                            koneksi.query("UPDATE product SET nama_produk=?, deskripsi_produk=?, kategori=?, warna=?, ukuran=?, harga=?, stok=?, berat=?, kondisi=?, foto_utama=?, foto_utama_url=?, foto1=?, foto1_url=?, foto2=?, foto2_url=?, foto3=?, foto3_url=?, foto4=?, foto4_url=?, foto5=?, foto5_url=?, foto6=?, foto6_url=?, foto7=?, foto7_url=?, foto8=?, foto8_url=? WHERE id=?", [kapital(nama_produk), deskripsi_produk, kategori, warna, ukuran, harga, stok, berat, kondisi, foto_utama_name,foto_utama_url, foto1_name, foto1_url, foto2_name, foto2_url, foto3_name, foto3_url, foto4_name, foto4_url, foto5_name, foto5_url, foto6_name, foto6_url, foto7_name, foto7_url, foto8_name, foto8_url, id], function (error, rows, fields) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    response.produk('Success Edit Produk', res);
                                }
                            });
                        } else {
                            //status 406 = not acceptable
                            response.produk('Nama Produk Sudah Ada', res, 406);
                        }
                    }
                })
            }
        });
    });
}

exports.deleteproduk = function (req, res) {
    var id = req.params.id;
    koneksi.query("DELETE FROM product WHERE id=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil delete produk", res);
        }
    });
};



exports.dtproduk = function (req, res) {
    koneksi.query("SELECT * FROM product ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            var Obj = [];
            // console.log(Object.values(rows))
            var no = 1;
            rows.forEach(function (element, index) { 
                
                var id = element.id
                var foto_utama_url = element.foto_utama_url
                var nama_produk = element.nama_produk
                var deskripsi_produk = element.deskripsi_produk
                var harga = element.harga
                var stok = element.stok
                // Obj.push(Object.values(element))
                Obj.push([
                    no=no,
                    foto_utama_url=foto_utama_url,
                    nama_produk= nama_produk,
                    deskripsi_produk = deskripsi_produk,
                    harga = harga,
                    stok = stok,
                    id=id,
                ])
                no++;
            }); 
            response.datatables(Obj, res);
        }

    });
};
exports.dtbanklist = function (req, res) {
    koneksi.query("SELECT * FROM setting_bank", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            var Obj = [];
            // console.log(Object.values(rows))
            var no = 1;
            rows.forEach(function (element, index) { 
                
                var id = element.id
                var bank_name = element.bank_name
                var bank_rekening = element.bank_rekening
                var bank_name_rekening = element.bank_name_rekening
                // Obj.push(Object.values(element))
                Obj.push([
                    no=no,
                    bank_name=bank_name,
                    bank_rekening= bank_rekening,
                    bank_name_rekening = bank_name_rekening,
                    id=id,
                ])
                no++;
            }); 
            response.datatables(Obj, res);
        }

    });
};

exports.dtmemberlist = function (req, res) {
    koneksi.query("SELECT * FROM member", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            var Obj = [];
            // console.log(Object.values(rows))
            var no = 1;
            rows.forEach(function (element, index) { 
                
                var id = element.id
                var nama_lengkap = element.nama_lengkap
                var email = element.email
                var no_hp = element.no_hp
                // Obj.push(Object.values(element))
                Obj.push([
                    no=no,
                    nama_lengkap=nama_lengkap,
                    email= email,
                    no_hp = no_hp,
                    id=id,
                ])
                no++;
            }); 
            response.datatables(Obj, res);
        }

    });
};

exports.dtmessagelist = function (req, res) {
    koneksi.query("SELECT * FROM contact", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            var Obj = [];
            // console.log(Object.values(rows))
            var no = 1;
            rows.forEach(function (element, index) { 
                
                var id = element.id
                var nama = element.nama
                var email = element.email
                var pesan = element.pesan
                // Obj.push(Object.values(element))
                Obj.push([
                    no=no,
                    nama=nama,
                    email= email,
                    pesan = pesan,
                    id=id,
                ])
                no++;
            }); 
            response.datatables(Obj, res);
        }

    });
};





exports.userbyid = function (req, res) {
    var id = req.params.id;

    koneksi.query("SELECT * FROM users WHERE id=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
            // console.log(req.params);
        }

    });
};


// pakai x-www-form-urlencoded
exports.auth = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    const crypto = require('crypto')
    let pass = crypto.createHash('md5').update(password).digest("hex");
    if (username && password) {
        koneksi.query('SELECT * FROM users WHERE username =? AND password =?', [username, pass], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else if (rows.length > 0) {
                response.ok(rows, res);
            } else {
                response.ok("Incorrect Username and/or Password!", res, 202);
            }
        });
    } else {
        response.ok("Please insert Username and Password!", res, 204);
    }
};

//pakai form-data
exports.upload = function (req, res) {
    // membuat objek form dari formidable
    var form = new formidable.IncomingForm();

    // manangani upload file
    form.parse(req, function (err, fields, files) {
        var oldpath = files.gambar.path;
        var newpath = "./public/images/" + files.gambar.name.replace(/\s+/g, '-').toLowerCase();;
        var gambar = files.gambar.name;

        // pindahakan file yang telah di-upload
        mv(oldpath, newpath, function (err) {
            if (err) { 
                console.log(err); 
            } else {
                koneksi.query("INSERT INTO images (image) VALUES (?)", [gambar], function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok(rows, res);
                        // console.log(res);
                    }
                });
            }
        });
    });
};


//menggunakan x-www-form-urlencoded
// exports.createuser = function (req, res) {
//     var username = req.body.username;
//     var password = req.body.password;

//     koneksi.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], function (error, rows, fields) {
//         if (error) {
//             console.log(error);
//         } else {
//             response.ok(rows, res);
//             console.log(res);
//         }
//     });
// };

//menggunakan form-data
exports.createuser = function (req, res) {
    // membuat objek form dari formidable
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        var username = fields.username;
        var password = fields.password;

        koneksi.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
                // console.log(res);
            }
        });
    });
};

//menggunakan x-www-form-urlencoded
// exports.updateuser = function (req, res) {
//     var id = req.body.id;
//     var username = req.body.username;
//     var password = req.body.password;

//     koneksi.query("UPDATE users SET username=?, password=? WHERE id=?", [username, password, id], function (error, rows, fields) {
//         if (error) {
//             console.log(error);
//         } else {
//             response.ok("Berhasil merubah user", res);
//         }
//     });
// };

//menggunakan x-www-form-data
exports.updateuser = function (req, res) {
    // membuat objek form dari formidable
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        var id = fields.id;
        var username = fields.username;
        var password = fields.password;

        koneksi.query("UPDATE users SET username=?, password=? WHERE id=?", [username, password, id], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil merubah user " + id, res);
                // console.log(res);
            }
        });
    });
};

//menggunakan x-www-form-urlencoded
// exports.deleteuser = function (req, res) {
//     var id = req.body.id;

//     koneksi.query("DELETE FROM users WHERE id=?", [id], function (error, rows, fields) {
//         if (error) {
//             console.log(error);
//         } else {
//             response.ok("Berhasil menghapus user", res);
//             console.log(res);
//         }
//     });
// };

//menggunakan form-data
exports.deleteuser = function (req, res) {
    // membuat objek form dari formidable
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        var id = fields.id;

        koneksi.query("DELETE FROM users WHERE id=?", [id], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menghapus user", res);
                // console.log(res);
            }
        });
    });
};


exports.genres = function (req, res) {
    koneksi.query("SELECT * FROM genres ORDER BY genre ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
            // console.log(req.params);
        }

    });
};

exports.producers = function (req, res) {
    koneksi.query("SELECT * FROM producers ORDER BY producer ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
            // console.log(req.params);
        }

    });
};

exports.seasons = function (req, res) {
    koneksi.query("SELECT * FROM seasons ORDER BY year ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
            // console.log(req.params);
        }

    });
};

exports.types = function (req, res) {
    koneksi.query("SELECT * FROM types ORDER BY type ", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
            // console.log(req.params);
        }

    });
};



// end api v1



