import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const uAPI = 'https://api-online-store-v1.herokuapp.com';

class AddBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // redirect : false,
            // dataBank: {
            //     id: '',
            //     bank_name: '',
            //     bank_rekening: '',
            //     bank_name_rekening: '',
            // },
            loading: true,
        }
        // this.editBankChange = this.editBankChange.bind(this);
        // this.editBankSubmit = this.editBankSubmit.bind(this);
    }

    componentDidMount(){
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/admin/setting" />)
        }
        return (
            <div>
                <section className="content" style={{paddingTop:"20px"}}>
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit Produk</h3>
                            </div>
                            <div className="card-body">
                            {
                                this.state.loading ? (
                                    <div className="text-center" >
                                        <Loader type="Bars" color="#00BFFF" height={60} width={100} />
                                        Loading ...
                                    </div>
                                ):(
                                    <div>edit produk</div>
                                )
                            }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AddBank;