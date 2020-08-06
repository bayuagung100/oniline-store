import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            dataMember: {
                id: '',
                name: '',
                email: '',
                no_hp: '',
                province: '',
                city: '',
                subdistrict: '',
                postal_code: '',
                alamat: '',
            },
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/api/v1/memberlist/'+this.props.id)
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
                    dataMember: {
                        id: data.id,
                        name: data.nama_lengkap,
                        email: data.email,
                        no_hp: data.no_hp,
                        province: data.provinsi,
                        city: data.kabupaten,
                        subdistrict: data.kecamatan,
                        postal_code: data.kode_pos,
                        alamat: data.alamat,
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
            return (<Redirect to="/admin/member" />)
        }
        var sentence = this.state.dataMember.city;
        var split = sentence.split("-");
        var kota = split[0];
        var kabupaten = split[1];
        return (
            <div>
                <section className="content" style={{paddingTop:"20px"}}>
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Detail Member</h3>
                                <Link to="/admin/member" className="btn btn-primary btn-sm" style={{ float:"right", marginRight:"4px"}}>
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
                                        <b>{this.state.dataMember.name}</b>
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    <label className="col-sm-2" >Email <span style={{ float:"right"}}>:</span></label>
                                    <div className="col-sm-4">{this.state.dataMember.email}</div>
                                    <label className="col-sm-2" >No Hp <span style={{ float:"right"}}>:</span></label>
                                    <div className="col-sm-4">{this.state.dataMember.no_hp}</div>
                                </div>
                                
                                <div className="form-group row">
                                    <label className="col-sm-2" >Provinsi <span style={{ float:"right"}}>:</span></label>
                                    <div className="col-sm-4">{this.state.dataMember.province}</div>
                                    <label className="col-sm-2" >Kota / Kabupaten <span style={{ float:"right"}}>:</span></label>
                                    <div className="col-sm-4">{kota} ({kabupaten})</div>
                                </div>
                                
                                <div className="form-group row">
                                    <label className="col-sm-2" >Kecamatan <span style={{ float:"right"}}>:</span></label>
                                    <div className="col-sm-4">{this.state.dataMember.subdistrict}</div>
                                    <label className="col-sm-2" >Kode Pos <span style={{ float:"right"}}>:</span></label>
                                    <div className="col-sm-4">{this.state.dataMember.postal_code}</div>
                                </div>

                                <div className="form-group row">
                                        <label className="col-sm-2 control-label">Alamat <span style={{ float:"right"}}>:</span></label>
                                        <div className="col-sm-4">{this.state.dataMember.alamat}</div>
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