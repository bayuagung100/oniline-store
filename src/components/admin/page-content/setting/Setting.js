import React, { Component } from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faCreditCard, faExclamationTriangle, faSave } from "@fortawesome/free-solid-svg-icons";
import Tbl from "../../../lib/Datatables";
import $ from 'jquery';
import axios from "axios";
// import 'select2';
// import AddBank from './AddBank';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';


import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


// const uAPI = 'https://api-online-store-v1.herokuapp.com';
const uAPIlocal = 'http://localhost:8080';


class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // show: {
            //     // show1: this.props.show1,
            //     // show2: this.props.show2,
            //     showSetting: true,
            //     showAddBank: false,
            // },
            // banklist: [],
            
            tbl: this.props.tbl,
            sosmed: {
                id: '',
                email: '',
                whatsapp: '',
                instagram: '',
                loading: true,
            },
            infoweb: {
                id: '',
                judul: '',
                deskripsi: '',
                alamat: '',
                provinsi: '',
                kabupaten: '',
                kecamatan: '',
                kode_pos: '',
                loading: true,
            }
        }
        this.infoChange = this.infoChange.bind(this);
        this.infoSubmit = this.infoSubmit.bind(this);
        this.sosmedChange = this.sosmedChange.bind(this);
        this.sosmedSubmit = this.sosmedSubmit.bind(this);
        this.getApiCity = this.getApiCity.bind(this);
        this.getApiProvince = this.getApiProvince.bind(this);
        this.getApiSubdistrict = this.getApiSubdistrict.bind(this);
        this.getApiSosmed = this.getApiSosmed.bind(this);
        this.getApiInfoWeb = this.getApiInfoWeb.bind(this);
        // this.hideComponent = this.hideComponent.bind(this);
        this.active = this.active.bind(this);
    }
    infoChange(e) {
        let newinfo = { ...this.state.infoweb };
        newinfo[e.target.name] = e.target.value;
        this.setState({
            infoweb: newinfo
        },()=>console.log(this.state.infoweb));
    }
    infoSubmit(e) {
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
                return axios.put(uAPIlocal+'/api/v1/infoweb',{
                    id: this.state.infoweb.id,
                    judul: this.state.infoweb.judul,
                    deskripsi: this.state.infoweb.deskripsi,
                    alamat: this.state.infoweb.alamat,
                    provinsi: this.state.infoweb.provinsi,
                    kabupaten: this.state.infoweb.kabupaten,
                    kecamatan: this.state.infoweb.kecamatan,
                    kode_pos: this.state.infoweb.kode_pos,
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
                    text: 'Success update informasi website',
                    icon: 'success',
                    allowOutsideClick: false
                })
            }
        })
    }

    sosmedChange(e) {
        let newsosmed = { ...this.state.sosmed };
        newsosmed[e.target.name] = e.target.value;
        this.setState({
            sosmed: newsosmed
        });
    }
    sosmedSubmit(e) {
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
                return axios.put(uAPIlocal+'/api/v1/sosmed',{
                    id: this.state.sosmed.id,
                    email: this.state.sosmed.email,
                    whatsapp: this.state.sosmed.whatsapp,
                    instagram: this.state.sosmed.instagram,
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
                    text: 'Success update social media',
                    icon: 'success',
                    allowOutsideClick: false
                })
            }
        })
          
        

    }

    getApiProvince(e){
        // pakai fetch
        // fetch('http://localhost:8080/api/v1/province')
        // .then(response => {
        //     return response.json();
        // })
        // .then(jsonData => {
        //     this.setState({
        //         province: jsonData.results
        //     });
        // });

        // pakai axios
        axios.get(uAPIlocal+'/api/v1/province')
        .then(response => 
            response.data.results.map(province => ({
                value: `${province.province_name}`,
                label: `${province.province_name}`,
            }))
        )
        .then(province => {
            this.setState({
                province
            },()=>console.log(this.state.province));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    getApiCity(e){
        // pakai fetch
        // fetch('http://localhost:8080/api/v1/city')
        // .then(response => {
        //     return response.json();
        // })
        // .then(jsonData => {
        //     this.setState({
        //         city: jsonData.results
        //     });
        // });

        // pakai axios
        axios.get(uAPIlocal+'/api/v1/city')
        .then(response => 
            response.data.results.map(city => ({
                value: `${city.city_name} - (${city.type})`,
                label: `${city.city_name} - (${city.type})`,
                // city_id: `${city.city_id}`,
                // city_name: `${city.city_name}`,
                // type: `${city.type}`,
                // postal_code: `${city.postal_code}`,
            }))
        )
        .then(city => {
            this.setState({
                city
            },()=>console.log(this.state.city));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    getApiSubdistrict(e){
        // pakai fetch
        // fetch('http://localhost:8080/api/v1/subdistrict')
        // .then(response => {
        //     return response.json();
        // })
        // .then(jsonData => {
        //     this.setState({
        //         subdistrict: jsonData.results
        //     });
        // });

        // pakai axios
        axios.get(uAPIlocal+'/api/v1/subdistrict')
        .then(response => 
            response.data.results.map(subdistrict => ({
                value: `${subdistrict.subdistrict_name}`,
                label: `${subdistrict.subdistrict_name}`,
                // subdistrict_id: `${subdistrict.subdistrict_id}`,
                // subdistrict_name: `${subdistrict.subdistrict_name}`,
            }))
        )
        .then(subdistrict => {
            this.setState({
                subdistrict
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    getApiInfoWeb(e){
        // pakai fetch
        // fetch('http://localhost:8080/api/v1/infoweb')
        // .then(response => {
        //     return response.json();
        // })
        // .then(jsonData => {
        //     this.setState({
        //         infoweb: jsonData.results[0]
        //     });
        // });

        // pakai axios
        axios.get(uAPIlocal+'/api/v1/infoweb')
        .then(response => 
            response.data.results.map(infoweb => ({
                id: `${infoweb.id}`,
                judul: `${infoweb.judul_website}`,
                deskripsi: `${infoweb.deskripsi_website}`,
                alamat: `${infoweb.alamat}`,
                provinsi: {
                    value: `${infoweb.province}`,
                    label: `${infoweb.province}`,
                },
                kabupaten: {
                    value: `${infoweb.city}`,
                    label: `${infoweb.city}`,
                },
                kecamatan: {
                    value: `${infoweb.subdistrict}`,
                    label: `${infoweb.subdistrict}`,
                },
                kode_pos: `${infoweb.postal_code}`,
                loading: false,
            }))
        )
        .then(infoweb => {
            this.setState({
                infoweb: infoweb[0]
            },()=>console.log(this.state.infoweb));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    getApiSosmed(e){
        // pakai fetch
        // fetch('http://localhost:8080/api/v1/sosmed')
        // .then(response => {
        //     return response.json();
        // })
        // .then(jsonData => {
        //     this.setState({
        //         sosmed: jsonData.results[0]
        //     });
        // });

        // pakai axios
        axios.get(uAPIlocal+'/api/v1/sosmed')
        .then(response => 
            response.data.results.map(sosmed => ({
                id: `${sosmed.id}`,
                email: `${sosmed.email}`,
                whatsapp: `${sosmed.whatsapp}`,
                instagram: `${sosmed.instagram}`,
                loading: false,
            }))
        )
        .then(sosmed => {
            this.setState({
                sosmed: sosmed[0]
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    // hideComponent() {
    //     // this.setState({
    //     //     showSetting: !this.state.show.showSetting,
    //     //     showAddBank: !this.state.show.showAddBank
    //     // });
    //     this.setState(prevState => ({
    //         show: {                   // object that we want to update
    //             ...prevState.show,    // keep all other key-value pairs

    //             // update the value of specific key
    //             showSetting: !this.state.show.showSetting,
    //             showAddBank: !this.state.show.showAddBank,
    //         }
    //     }))
    // }

    options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    active(){
        console.log(this.props)
        // this.setState((state, props) => {
        //     return {
        //         path: this.props.history.location.pathname,
        //     };
        // })
    }
    
    provChange = selectedProv => {
        this.setState({ 
            infoweb:{
                ...this.state.infoweb,
                provinsi: selectedProv.value,
            }
        },()=>console.log(this.state.infoweb));
    };

    cityChange = selectedCity => {
        this.setState({ 
            infoweb:{
                ...this.state.infoweb,
                kabupaten: selectedCity.value,
            }
        },()=>console.log(this.state.infoweb));
    };

    subChange = selectedSub => {
        this.setState({ 
            infoweb:{
                ...this.state.infoweb,
                kecamatan: selectedSub.value,
            }
        },()=>console.log(this.state.infoweb));
    };
    

    componentDidMount(){
        // $('.select2').select2();
        $('.select2').on("change", this.infoChange);

        this.getApiSosmed();
        this.getApiInfoWeb();
        this.getApiProvince();
        this.getApiCity();
        this.getApiSubdistrict();

    }

    // try = () => {
    //     this.props.history.push('/admin/setting/add-bank');
    // }
  
    
    render() {
        // const {showSetting, showAddBank} = this.state;
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
                                                {/* <Link  to="/admin" onClick={this.active}>
                            <span className="brand-text font-weight-light">Administrator</span>
                        </Link> */}
                                                {/* <Route path="/admin/setting/add-bank" component={AddBank} /> */}
                                                <Link to="/admin/setting/add-bank" className="btn btn-primary btn-icon-split" style={{ float:"right", marginRight:"4px"}}>
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
                                            {
                                                this.state.infoweb.loading ? (
                                                    <div className="text-center" >
                                                        <Loader type="Bars" color="#00BFFF" height={60} width={100} />
                                                        Loading ...
                                                    </div>
                                                ):(
                                                    <form onSubmit={e => this.infoSubmit(e)} className="form-horizontal" style={{padding:"10px"}}>
                                                        <div className="form-group">
                                                            <label>Judul Website </label>
                                                            <input type="text" className="form-control" name="judul" value={this.state.infoweb.judul} onChange={this.infoChange} placeholder="Enter judul website" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Deskripsi Website (*Jangan pakai enter)</label>
                                                            <textarea name="deskripsi"  className="form-control" value={this.state.infoweb.deskripsi} onChange={this.infoChange} placeholder="Enter deskripsi website" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Alamat (*Jangan pakai enter)</label>
                                                            <textarea name="alamat" className="form-control" value={this.state.infoweb.alamat} onChange={this.infoChange} placeholder="Nama jalan dan nomor toko" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Provinsi</label>
                                                            <Select
                                                                placeholder='Pilih Provinsi'
                                                                defaultValue={this.state.infoweb.provinsi}
                                                                value={this.state.selectedProv}
                                                                onChange={this.provChange}
                                                                options={this.state.province}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Kota / Kabupaten</label>
                                                            <Select
                                                                placeholder='Pilih Kota/Kabupaten'
                                                                defaultValue={this.state.infoweb.kabupaten}
                                                                value={this.state.selectedCity}
                                                                onChange={this.cityChange}
                                                                options={this.state.city}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Kecamatan</label>
                                                            <Select
                                                                placeholder='Pilih Kecamatan'
                                                                defaultValue={this.state.infoweb.kecamatan}
                                                                value={this.state.selectedSub}
                                                                onChange={this.subChange}
                                                                options={this.state.subdistrict}
                                                            />
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <label>Provinsi</label>
                                                            {
                                                                this.state.province ? (
                                                                    <select className="form-control select2" name="provinsi" value={this.state.infoweb.provinsi} onChange={this.infoChange} required>
                                                                        <option value="">Pilih provinsi</option>
                                                                        {
                                                                            this.state.province.map((value, index) => {
                                                                                return(
                                                                                <option key={index} value={value.province_name}>{value.province_name}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                ):(
                                                                    <select className="form-control select2" name="provinsi" value={this.state.infoweb.provinsi} onChange={this.infoChange} required>
                                                                        <option value="">Pilih provinsi</option>
                                                                    </select>
                                                                )
                                                            }
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Kota / Kabupaten</label>
                                                            {
                                                                this.state.city ? (
                                                                    <select className="form-control select2" name="kabupaten" value={this.state.infoweb.kabupaten} onChange={this.infoChange} required>
                                                                        <option value="">Pilih kota/kabupaten</option>
                                                                        {
                                                                            this.state.city.map((value, index) => {
                                                                                return(
                                                                                <option key={index} value={value.city_name+"-"+value.type}>{value.city_name} - ({value.type})</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                ):(
                                                                    <select className="form-control select2" name="kabupaten" value={this.state.infoweb.kabupaten} onChange={this.infoChange} required>
                                                                        <option value="">Pilih kota/kabupaten</option>
                                                                    </select>
                                                                )
                                                            }
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Kecamatan</label>
                                                            {
                                                                this.state.subdistrict ? (
                                                                    <select className="form-control select2" name="kecamatan" value={this.state.infoweb.kecamatan} onChange={this.infoChange} required>
                                                                        <option value="">Pilih kecamatan</option>
                                                                        {
                                                                            this.state.subdistrict.map((value, index) => {
                                                                                return(
                                                                                <option key={index} value={value.subdistrict_name}>{value.subdistrict_name}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                ):(
                                                                    <select className="form-control select2" name="kecamatan" value={this.state.infoweb.kecamatan} onChange={this.infoChange} required>
                                                                        <option value="">Pilih kecamatan</option>
                                                                    </select>
                                                                )
                                                            }
                                                        </div> */}
                                                        <div className="form-group">
                                                            <label>Kode Pos </label>
                                                            <input type="text" className="form-control" name="kode_pos" value={this.state.infoweb.kode_pos} onChange={this.infoChange} placeholder="Enter kode pos" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-sm-offset-2 col-sm-10">
                                                                <button type="submit" className="btn btn-primary">
                                                                    <FontAwesomeIcon icon={faSave}/> Simpan 
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                )
                                            }
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
                                            {
                                                this.state.sosmed.loading ? (
                                                    <div className="text-center" >
                                                        <Loader type="Bars" color="#00BFFF" height={60} width={100} />
                                                        Loading ...
                                                    </div>
                                                ):(
                                                    <form onSubmit={e => this.sosmedSubmit(e)} className="form-horizontal" style={{padding:"10px"}}>
                                                        <div className="form-group">
                                                            <label>Email </label>
                                                            <input type="email" className="form-control" name="email" value={this.state.sosmed.email}  onChange={this.sosmedChange} placeholder="Enter email" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Whatsapp (*Jangan pakai +)</label>
                                                            <input type="tel" className="form-control" name="whatsapp" value={this.state.sosmed.whatsapp} onChange={this.sosmedChange} placeholder="628xxxxxxxxxx" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Instagram</label>
                                                            <input type="text" className="form-control" name="instagram" value={this.state.sosmed.instagram} onChange={this.sosmedChange} placeholder="https://www.instagram.com/nama_ig/" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-sm-offset-2 col-sm-10">
                                                                <button type="submit" className="btn btn-primary">
                                                                    <FontAwesomeIcon icon={faSave}/> Simpan 
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                )
                                            }
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                
                {/* {
                    this.state.show.showAddBank === true ? (
                        <div>
                            <Route path="/admin/setting/add-bank" component={AddBank} />
                        </div>
                    ) : (
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
                                                <Link to="/admin/setting/add-bank" onClick={this.hideComponent} className="btn btn-primary btn-icon-split" style={{ float:"right", marginRight:"4px"}}>
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
                                                <form onSubmit={e => this.infoSubmit(e)} className="form-horizontal" style={{padding:"10px"}}>
                                                    <div className="form-group">
                                                        <label>Judul Website </label>
                                                        <input type="text" className="form-control" name="judul" value={this.state.infoweb.judul} onChange={this.infoChange} placeholder="Enter judul website" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Deskripsi Website (*Jangan pakai enter)</label>
                                                        <textarea name="deskripsi"  className="form-control" value={this.state.infoweb.deskripsi} onChange={this.infoChange} placeholder="Enter deskripsi website" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Alamat (*Jangan pakai enter)</label>
                                                        <textarea name="alamat" className="form-control" value={this.state.infoweb.alamat} onChange={this.infoChange} placeholder="Nama jalan dan nomor toko" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Provinsi</label>
                                                        {
                                                            this.state.province ? (
                                                                <select className="form-control select2" name="provinsi" value={this.state.infoweb.provinsi} onChange={this.infoChange} required>
                                                                    <option value="">Pilih provinsi</option>
                                                                    {
                                                                        this.state.province.map((value, index) => {
                                                                            return(
                                                                            <option key={index} value={value.province_name}>{value.province_name}</option>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            ):(
                                                                <select className="form-control select2" name="provinsi" value={this.state.infoweb.provinsi} onChange={this.infoChange} required>
                                                                    <option value="">Pilih provinsi</option>
                                                                </select>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Kota / Kabupaten</label>
                                                        {
                                                            this.state.city ? (
                                                                <select className="form-control select2" name="kabupaten" value={this.state.infoweb.kabupaten} onChange={this.infoChange} required>
                                                                    <option value="">Pilih kota/kabupaten</option>
                                                                    {
                                                                        this.state.city.map((value, index) => {
                                                                            return(
                                                                            <option key={index} value={value.city_name+"-"+value.type}>{value.city_name} - ({value.type})</option>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            ):(
                                                                <select className="form-control select2" name="kabupaten" value={this.state.infoweb.kabupaten} onChange={this.infoChange} required>
                                                                    <option value="">Pilih kota/kabupaten</option>
                                                                </select>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Kecamatan</label>
                                                        {
                                                            this.state.subdistrict ? (
                                                                <select className="form-control select2" name="kecamatan" value={this.state.infoweb.kecamatan} onChange={this.infoChange} required>
                                                                    <option value="">Pilih kecamatan</option>
                                                                    {
                                                                        this.state.subdistrict.map((value, index) => {
                                                                            return(
                                                                            <option key={index} value={value.subdistrict_name}>{value.subdistrict_name}</option>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            ):(
                                                                <select className="form-control select2" name="kecamatan" value={this.state.infoweb.kecamatan} onChange={this.infoChange} required>
                                                                    <option value="">Pilih kecamatan</option>
                                                                </select>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Kode Pos </label>
                                                        <input type="text" className="form-control" name="kode_pos" value={this.state.infoweb.kode_pos} onChange={this.infoChange} placeholder="Enter kode pos" required />
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
                                                <form onSubmit={e => this.sosmedSubmit(e)} className="form-horizontal" style={{padding:"10px"}}>
                                                    <div className="form-group">
                                                        <label>Email </label>
                                                        <input type="email" className="form-control" name="email" value={this.state.sosmed.email}  onChange={this.sosmedChange} placeholder="Enter email" required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Whatsapp (*Jangan pakai +)</label>
                                                        <input type="tel" className="form-control" name="whatsapp" value={this.state.sosmed.whatsapp} onChange={this.sosmedChange} placeholder="628xxxxxxxxxx" required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Instagram</label>
                                                        <input type="text" className="form-control" name="instagram" value={this.state.sosmed.instagram} onChange={this.sosmedChange} placeholder="https://www.instagram.com/nama_ig/" required/>
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
                } */}
                
                
            </div>
        )
    }
}
export default Setting;