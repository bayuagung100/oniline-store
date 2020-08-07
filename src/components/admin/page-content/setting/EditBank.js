import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

const uAPI = 'https://api-online-store-v1.herokuapp.com';

class AddBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            dataBank: {
                id: '',
                bank_name: '',
                bank_rekening: '',
                bank_name_rekening: '',
            },
        }
        this.editBankChange = this.editBankChange.bind(this);
        this.editBankSubmit = this.editBankSubmit.bind(this);
    }

    componentDidMount(){
        axios.get(uAPI+'/api/v1/banklist/'+this.props.id)
        .then(function(response) {
            return response;
        })
        .then(response => {
            var cek = response.data.results.length;
            var data = response.data.results[0];
            if (cek===0) {
                this.setState({
                    redirect: true
                });
            } else {
                this.setState({
                    dataBank: data
                });
                
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    editBankChange(e) {
        let newdataBank = { ...this.state.dataBank };
        newdataBank[e.target.name] = e.target.value;
        this.setState({
            dataBank: newdataBank
        });
    }

    editBankSubmit(e){
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                axios.put(uAPI+'/api/v1/banklist',{
                    id: this.state.dataBank.id,
                    bank_name: this.state.dataBank.bank_name,
                    bank_rekening: this.state.dataBank.bank_rekening,
                    bank_name_rekening: this.state.dataBank.bank_name_rekening,
                })
                .then(
                    () => Swal.fire({
                        title: 'Success!',
                        text: 'Success edit rekening bank',
                        icon: 'success',
                        allowOutsideClick: false,
                    }).then(() => this.setState({ redirect: true }))
                )
                .catch(function (error) {
                    console.log(error);
                });
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
                                <h3 className="card-title">Edit Rekening Bank</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={e => this.editBankSubmit(e)} className="form-horizontal" style={{padding:"10px"}}>
                                    <div className="form-group">
                                        <label>Nama Bank</label>
                                        <input type="text" className="form-control" name="bank_name" value={this.state.dataBank.bank_name} onChange={this.editBankChange} placeholder="Ex: BCA"/>
                                    </div>
                                    <div className="form-group">
                                        <label>No Rekening</label>
                                        <input type="tel" className="form-control" name="bank_rekening" value={this.state.dataBank.bank_rekening} onChange={this.editBankChange} placeholder="Enter no.rekening"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nama Rekening</label>
                                        <input type="text" className="form-control" name="bank_name_rekening" value={this.state.dataBank.bank_name_rekening} onChange={this.editBankChange} placeholder="Enter nama rekening"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <button type="submit" className="btn btn-primary">
                                                <FontAwesomeIcon icon={faSave}/> Simpan 
                                            </button> <Link to="/admin/setting" className="btn btn-warning" ><FontAwesomeIcon icon={faArrowLeft}/> Batal</Link>
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