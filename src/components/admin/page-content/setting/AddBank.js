import React, { Component } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';


// const uAPI = 'https://api-online-store-v1.herokuapp.com';
const uAPIlocal = 'http://localhost:8080';

function BtnBack() {
    let history = useHistory();
    return (
        <button type="button"  className="btn btn-warning" onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft}/> Batal
        </button>
    );
}

class AddBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            addBank: {
                nama_bank: '',
                no_rekening: '',
                nama_rekening: '',
            },
        }
        this.addBankChange = this.addBankChange.bind(this);
        this.addBankSubmit = this.addBankSubmit.bind(this);
    }

    componentDidMount(){
    }

    addBankChange(e) {
        let newaddBank = { ...this.state.addBank };
        newaddBank[e.target.name] = e.target.value;
        this.setState({
            addBank: newaddBank
        });
    }

    addBankSubmit(e){
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return axios.post(uAPIlocal+'/api/v1/banklist',{
                    nama_bank: this.state.addBank.nama_bank,
                    no_rekening: this.state.addBank.no_rekening,
                    nama_rekening: this.state.addBank.nama_rekening,
                })
                .catch(function (error) {
                    console.log(error);
                    Swal.fire('Oops...', 'Something went wrong!', 'error');
                });
            }
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Success tambah rekening bank',
                    icon: 'success',
                    allowOutsideClick: false,
                }).then(() => this.setState({ redirect: true }))
            }
        })
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
                                <h3 className="card-title">Tambah Rekening Bank</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={e => this.addBankSubmit(e)} className="form-horizontal" style={{padding:"10px"}}>
                                    <div className="form-group">
                                        <label>Nama Bank</label>
                                        <input type="text" className="form-control" name="nama_bank" value={this.state.addBank.nama_bank}  onChange={this.addBankChange} placeholder="Ex: BCA" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>No Rekening</label>
                                        <input type="tel" className="form-control" name="no_rekening" value={this.state.addBank.no_rekening}  onChange={this.addBankChange} placeholder="Enter no.rekening" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nama Rekening</label>
                                        <input type="text" className="form-control" name="nama_rekening" value={this.state.addBank.nama_rekening}  onChange={this.addBankChange} placeholder="Enter nama rekening" required/>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <button type="submit" className="btn btn-primary">
                                                <FontAwesomeIcon icon={faSave}/> Simpan 
                                            </button> <BtnBack/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AddBank;