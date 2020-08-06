import React, { Component } from "react";
import Tbl from "../../../lib/Datatables";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class OnlineStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tbl: this.props.tbl,
        }
    }

    render() {
        // console.log(this.state.path)
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Online Store</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Daftar Produk</h3>

                                <Link to="/admin/online-store/add-product" className="btn btn-primary btn-sm" style={{ float:"right", marginRight:"4px"}}>
                                    <span className="icon text-white-50">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </span>
                                    <span className="text">Tambah</span>
                                </Link>
                            </div>
                            <div className="card-body">
                                <Tbl id={this.state.tbl}></Tbl>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default OnlineStore;