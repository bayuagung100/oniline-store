import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const uAPI = 'https://api-online-store-v1.herokuapp.com';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            dataMessage: {
                id: '',
                nama: '',
                email: '',
                pesan: '',
            },
        }
    }

    componentDidMount(){
        axios.get(uAPI+'/api/v1/messagelist/'+this.props.id)
        .then(function(response) {
            return response;
        })
        .then(response => {
            var cek = response.data.results.length;
            var data = response.data.results[0];
            // response.data.results.map(sosmed => ({
            //     id: `${sosmed.id}`,
            //     email: `${sosmed.email}`,
            //     whatsapp: `${sosmed.whatsapp}`,
            //     instagram: `${sosmed.instagram}`,
            // }))
            if (cek===0) {
                this.setState({
                    redirect: true
                });
            } else {
                this.setState({
                    dataMessage: {
                        id: data.id,
                        nama: data.nama,
                        email: data.email,
                        pesan: data.pesan,
                    }
                });
                
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/admin/message" />)
        }
        return (
            <div>
                <section className="content" style={{paddingTop:"20px"}}>
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Detail Message</h3>
                                <Link to="/admin/message" className="btn btn-primary btn-sm" style={{ float:"right", marginRight:"4px"}}>
                                    <span className="icon text-white-50">
                                        <FontAwesomeIcon icon={faAngleLeft}/>
                                    </span>
                                    <span className="text"> Kembali</span>
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="form-group row">
                                    <label className="col-sm-2 control-label">Nama Lengkap <span style={{ float:"right"}}>:</span></label>
                                    <div className="col-sm-4">
                                        <b>{this.state.dataMessage.nama}</b>
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    <label className="col-sm-2" >Email <span style={{ float:"right"}}>:</span></label>
                                    <div className="col-sm-4">{this.state.dataMessage.email}</div>
                                </div>

                                <div className="form-group row">
                                        <label className="col-sm-2 control-label">Pesan <span style={{ float:"right"}}>:</span></label>
                                        <div className="col-sm-4">{this.state.dataMessage.pesan}</div>
                                </div>
                                
                             </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Member;