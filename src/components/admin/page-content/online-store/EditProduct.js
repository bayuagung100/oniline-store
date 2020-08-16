import React, { Component } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import $ from 'jquery';
import '../../../lib/select2.css';
// import 'select2';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const uAPI = 'https://api-online-store-v1.herokuapp.com';
const uAPIlocal = 'http://localhost:8080';



class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            dataProduk: {
                id: '',
                nama_produk: '',
                deskripsi_produk: '',
                kategori: [],
                warna: [],
                ukuran: [],
                harga: '',
                stok: 0,
                foto_utama: {
                    icon: true,
                    preview: '',
                    raw: '',
                },
                foto1: {icon: true,preview: '',raw: '',},
                foto2: {icon: true,preview: '',raw: '',},
                foto3: {icon: true,preview: '',raw: '',},
                foto4: {icon: true,preview: '',raw: '',},
                foto5: {icon: true,preview: '',raw: '',},
                foto6: {icon: true,preview: '',raw: '',},
                foto7: {icon: true,preview: '',raw: '',},
                foto8: {icon: true,preview: '',raw: '',},
                berat: '',
                kondisi: '',
            },
            kategoriList:[],
            warnaList:[],
            ukuranList:[],
            duplikat:'',
            duplikat2:'',
            duplikat3:'',
            loading: false,
        }

        this.getApiCek = this.getApiCek.bind(this);
        this.getApikategoriList = this.getApikategoriList.bind(this);
    }

    getApiCek(e){
        axios.get(uAPIlocal+'/api/v1/produk/'+this.props.id)
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
                console.log(data)
                this.setState({
                    // dataProduk: data,
                    loading: false,
                },()=>console.log(this.state.dataProduk));
                
            }
        })
        // .then(dataProduk => {
        //     console.log(dataProduk)
        //     var kategori = dataProduk[0].kategori.split(',');
        //     var warna = dataProduk[0].warna.split(',');
        //     var ukuran = dataProduk[0].ukuran.split(',');
        //     if (dataProduk[0].foto1 === 'null') {
        //         console.log('foto1 null')
        //         this.setState({
        //             dataProduk:{
        //                 ...this.state.dataProduk,
        //                 foto1: {
        //                     icon: true,
        //                     preview: '',
        //                     raw: '',
        //                 },
        //             }
        //         })
        //     } else {
        //         console.log('foto1 ada')
        //         this.setState({
        //             dataProduk:{
        //                 ...this.state.dataProduk,
        //                 foto1: {
        //                     icon: false,
        //                     preview: uAPIlocal+'/'+dataProduk[0].foto1_url,
        //                     raw: {
        //                         name: dataProduk[0].foto1,
        //                     },
        //                 },
        //             }
        //         })
        //     }
        //     this.setState({
        //         dataProduk:{
        //             ...this.state.dataProduk,
        //             id: dataProduk[0].id,
        //             nama_produk: dataProduk[0].nama_produk,
        //             deskripsi_produk: dataProduk[0].nama_produk,
        //             // kategori: dataProduk[0].kategori,
        //             // warna: dataProduk[0].warna,
        //             // ukuran: dataProduk[0].ukuran,
        //             harga: dataProduk[0].harga,
        //             stok: dataProduk[0].stok,
        //             foto_utama: {
        //                 icon: false,
        //                 preview: uAPIlocal+'/'+dataProduk[0].foto_utama_url,
        //                 raw: {
        //                     name: dataProduk[0].foto_utama,
        //                 },
        //             },
        //             berat: dataProduk[0].berat,
        //             kondisi: dataProduk[0].kondisi,
        //         },
        //         loading: false
        //     },()=>console.log(this.state.dataProduk));
        // })
        .catch(function (error) {
            console.log(error);
        });
    }

    getApikategoriList(e){
        axios.get(uAPIlocal+'/api/v1/categorylist')
        .then(function(response) {
            return response;
        })
        .then(response => {
            var data = response.data.results;
            this.setState({
                kategoriList: data
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    componentDidMount(){
        $('.select2').select2();
        // this.getApiCek();
        this.getApikategoriList();
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/admin/online-store" />)
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
                                    <form className="form-horizontal" style={{padding:"10px"}}>
                                        <h4 style={{ paddingBottom:'15px'}}>Informasi Produk</h4>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Nama Produk</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" name="nama_produk" value='' required/>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Deskripsi Produk</label>
                                            <div className="col-sm-10">
                                                <textarea name="deskripsi_produk" className="form-control" value='' rows='9' required/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Kategori</label>
                                            <div className="col-sm-4">
                                            {
                                                this.state.kategoriList ? (
                                                    <select className="select2" multiple={true} data-placeholder="Buat Kategori" name="kategori" value='' style={{ width:'100%'}} required>
                                                        {
                                                            this.state.kategoriList.map((value, index) => {
                                                                return(
                                                                <option key={index} value={value}>{value}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                ):(
                                                    <select className="select2" multiple={true} data-placeholder="Buat Kategori" name="kategori" value='' style={{ width:'100%'}} required>
                                                    
                                                    </select>
                                                )
                                            }
                                            </div>
                                            <div className="col-sm-2 col-form-label">
                                                <Link to='#' data-toggle="modal" data-target="#modal-kategori" >Buat Kategori Baru</Link>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Warna</label>
                                            <div className="col-sm-4">
                                            {
                                                this.state.warnaList ? (
                                                    <select className="select2" multiple={true} data-placeholder="Buat Warna" name="warna" value='' style={{ width:'100%'}} required>
                                                    {
                                                        this.state.warnaList.map((value, index) => {
                                                            return(
                                                            <option key={index} value={value}>{value}</option>
                                                            )
                                                        })
                                                    }
                                                    </select>
                                                ):(
                                                    <select className="select2" multiple={true} data-placeholder="Buat Warna" name="warna" value='' style={{ width:'100%'}} required>
                                                    
                                                    </select>
                                                )
                                            }
                                            </div>
                                            <div className="col-sm-2 col-form-label">
                                                <Link to='#' data-toggle="modal" data-target="#modal-warna" >Buat Warna Baru</Link>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Ukuran</label>
                                            <div className="col-sm-4">
                                            {
                                                this.state.ukuranList ? (
                                                    <select className="select2" multiple={true} data-placeholder="Buat Ukuran" name="ukuran" value='' style={{ width:'100%'}} required>
                                                    {
                                                        this.state.ukuranList.map((value, index) => {
                                                            return(
                                                            <option key={index} value={value}>{value}</option>
                                                            )
                                                        })
                                                    }
                                                    </select>
                                                ):(
                                                    <select className="select2" multiple={true} data-placeholder="Buat Ukuran" name="ukuran" value='' style={{ width:'100%'}} required>
                                                    
                                                    </select>
                                                )
                                            }
                                            </div>
                                            <div className="col-sm-2 col-form-label">
                                                <Link to='#' data-toggle="modal" data-target="#modal-ukuran" >Buat Ukuran Baru</Link>
                                            </div>
                                        </div>

                                        <hr/>

                                        <h4 style={{ paddingBottom:'15px'}}>Informasi Penjualan</h4>

                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Harga</label>
                                        
                                            <div className="col-sm-4 input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">Rp</span>
                                                </div>
                                                <input type="tel" className="form-control" name="harga" value='' placeholder='50000' required/>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Stok</label>
                                            <div className="col-sm-4">
                                                <input type="number" className="form-control" name="stok" min="1" required/>
                                            </div>
                                        </div>

                                        <hr/>

                                        <h4 style={{ paddingBottom:'15px'}}>Pengaturan Media</h4>

                                        <hr/>

                                        <h4 style={{ paddingBottom:'15px'}}>Pengiriman</h4>

                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Berat</label>
                                            <div className="col-sm-4 input-group">
                                                <input type="text" className="form-control" name="berat" value='' required/>

                                                <div className="input-group-append">
                                                    <span className="input-group-text">gr</span>
                                                </div>
                                            </div>
                                        </div>

                                        <hr/>

                                        <h4 style={{ paddingBottom:'15px'}}>Lainnya</h4>
                                        
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Kondisi</label>
                                            <div className="col-sm-4">
                                                <select className="form-control select2" name="kondisi" value='' required>
                                                    <option value="new">Baru</option>
                                                    <option value="used">Pernah Dipakai</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button type="submit" className="btn btn-primary">
                                                    <FontAwesomeIcon icon={faSave}/> Simpan 
                                                </button> <Link to="/admin/online-store" className="btn btn-warning" ><FontAwesomeIcon icon={faArrowLeft}/> Batal</Link>
                                            </div>
                                        </div>
                                    </form>
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

export default EditProduct;