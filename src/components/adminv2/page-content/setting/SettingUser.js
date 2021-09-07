import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tbl from "../../../lib/Datatables";
import NewTbl from "../../../lib/datatables/Index";

class SettingUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tbl: this.props.tbl,
            path: this.props.path,
        }
    }
    componentDidMount() {
        // console.log("path", this.state.path)
    }
    render() {
        return (
            <>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Setting User</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title"><FontAwesomeIcon icon={faUser} /> Daftar User</h3>

                                        <Link to="/admin/setting-user/add-user" className="btn btn-primary btn-icon-split" style={{ float: "right", marginRight: "4px" }}>
                                            <span className="icon text-white-50">
                                                <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                            <span className="text">Tambah</span>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <NewTbl path={this.state.path} id={this.state.tbl} columns={["Nama","Email","Role"]} type='detail-delete'></NewTbl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default SettingUser;