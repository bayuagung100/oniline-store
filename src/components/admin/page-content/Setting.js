import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faCreditCard, faExclamationTriangle, faSave } from "@fortawesome/free-solid-svg-icons";
import Tbl from "../../lib/Datatables";
import Select from "../../lib/Select2";


class Setting extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         path: props.location.path
    //     }
    // }
    dataSet = [
        // [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    ];

    dataColums = [
        {title:"No"},
        {title:"Nama Bank"},
        {title:"No Rekening"},
        {title:"Nama Rekening"},
        {title:"Aksi"},
    ];

    options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    render() {
        // console.log(this.state.path)
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Setting</h1>
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
                                        <h3 className="card-title"><FontAwesomeIcon icon={faCreditCard}/> Daftar Rekening Bank</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-default" data-card-widget="collapse">
                                                <FontAwesomeIcon icon={faMinus}/>
                                            </button>
                                        </div>
                                        <Link to="#" className="btn btn-primary btn-icon-split" style={{ float:"right", marginRight:"4px"}}>
                                            <span className="icon text-white-50">
                                                <FontAwesomeIcon icon={faPlus}/>
                                            </span>
                                            <span className="text">Tambah</span>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Tbl data={this.dataSet} columns={this.dataColums}></Tbl>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title"><FontAwesomeIcon icon={faExclamationTriangle}/> Informasi Website</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <FontAwesomeIcon icon={faMinus}/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form method="post" action="#" className="form-horizontal" encType="multipart/form-data" style={{padding:"10px"}}>
                                            <div className="form-group">
                                                <label>Judul Website </label>
                                                <input type="text" className="form-control" name="title" value="" placeholder="Enter judul website"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Deskripsi Website (*Jangan pakai enter)</label>
                                                <textarea name="description" className="form-control" placeholder="Enter deskripsi website"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label>Alamat (*Jangan pakai enter)</label>
                                                <textarea name="alamat" className="form-control" placeholder="Nama jalan dan nomor toko"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label>Provinsi</label>
                                                <Select options={this.options} name="provinsi" placeholder="Pilih provinsi"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Kota / Kabupaten</label>
                                                <Select options={this.options} name="kabupaten" placeholder="Pilih kota/kabupaten"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Kecamatan</label>
                                                <Select options={this.options} name="kecamatan" placeholder="Pilih kecamatan"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Kode Pos </label>
                                                <input type="text" className="form-control" name="kode_pos" value="" placeholder="Enter kode pos"/>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <button type="submit" className="btn btn-primary">
                                                        <FontAwesomeIcon icon={faSave}/> Simpan 
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title"><FontAwesomeIcon icon={faExclamationTriangle}/> Social Media</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <FontAwesomeIcon icon={faMinus}/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form method="post" action="#" className="form-horizontal" encType="multipart/form-data" style={{padding:"10px"}}>
                                            <div className="form-group">
                                                <label>Email </label>
                                                <input type="email" className="form-control" name="email" value="" placeholder="Enter email"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Whatsapp (*Jangan pakai +)</label>
                                                <input type="tel" className="form-control" name="wa" value="" placeholder="628xxxxxxxxxx"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Instagram</label>
                                                <input type="text" className="form-control" name="ig" value="" placeholder="https://www.instagram.com/nama_ig/"/>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <button type="submit" className="btn btn-primary">
                                                        <FontAwesomeIcon icon={faSave}/> Simpan 
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Setting;