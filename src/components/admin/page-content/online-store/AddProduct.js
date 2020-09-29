import React, { Component } from "react";
import Select from 'react-select';
import { Redirect, useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faArrowLeft, faPlus, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import $ from 'jquery';
// import '../../../lib/select2.css';
// import '../../../lib/ekko-lightbox.css';
// import 'select2';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

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


class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            addProduk: {
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
                kondisi: 'new',
                slide: 'N',
            },
            kategoriList:[],
            warnaList:[],
            ukuranList:[],
            duplikat:'',
            duplikat2:'',
            duplikat3:'',
        }
        this.addProdukChange = this.addProdukChange.bind(this);
        this.kategoriChange = this.kategoriChange.bind(this);
        this.warnaChange = this.warnaChange.bind(this);
        this.ukuranChange = this.ukuranChange.bind(this);
        this.addProdukSubmit = this.addProdukSubmit.bind(this);


        this.fotoUtamaReset = this.fotoUtamaReset.bind(this);
        this.fotoUtamaChange = this.fotoUtamaChange.bind(this);
        this.fotoUtamaAdd = this.fotoUtamaAdd.bind(this);
        // this.fotoUtamaShow = this.fotoUtamaShow.bind(this);
        this.fotoUtamaDelete = this.fotoUtamaDelete.bind(this);

        this.foto1Reset = this.foto1Reset.bind(this);
        this.foto1Change = this.foto1Change.bind(this);
        this.foto1Add = this.foto1Add.bind(this);
        // this.foto1Show = this.foto1Show.bind(this);
        this.foto1Delete = this.foto1Delete.bind(this);

        this.foto2Reset = this.foto2Reset.bind(this);
        this.foto2Change = this.foto2Change.bind(this);
        this.foto2Add = this.foto2Add.bind(this);
        // this.foto2Show = this.foto2Show.bind(this);
        this.foto2Delete = this.foto2Delete.bind(this);

        this.foto3Reset = this.foto3Reset.bind(this);
        this.foto3Change = this.foto3Change.bind(this);
        this.foto3Add = this.foto3Add.bind(this);
        // this.foto3Show = this.foto3Show.bind(this);
        this.foto3Delete = this.foto3Delete.bind(this);

        this.foto4Reset = this.foto4Reset.bind(this);
        this.foto4Change = this.foto4Change.bind(this);
        this.foto4Add = this.foto4Add.bind(this);
        // this.foto4Show = this.foto4Show.bind(this);
        this.foto4Delete = this.foto4Delete.bind(this);

        this.foto5Reset = this.foto5Reset.bind(this);
        this.foto5Change = this.foto5Change.bind(this);
        this.foto5Add = this.foto5Add.bind(this);
        // this.foto5Show = this.foto5Show.bind(this);
        this.foto5Delete = this.foto5Delete.bind(this);

        this.foto6Reset = this.foto6Reset.bind(this);
        this.foto6Change = this.foto6Change.bind(this);
        this.foto6Add = this.foto6Add.bind(this);
        // this.foto6Show = this.foto6Show.bind(this);
        this.foto6Delete = this.foto6Delete.bind(this);

        this.foto7Reset = this.foto7Reset.bind(this);
        this.foto7Change = this.foto7Change.bind(this);
        this.foto7Add = this.foto7Add.bind(this);
        // this.foto7Show = this.foto7Show.bind(this);
        this.foto7Delete = this.foto7Delete.bind(this);

        this.foto8Reset = this.foto8Reset.bind(this);
        this.foto8Change = this.foto8Change.bind(this);
        this.foto8Add = this.foto8Add.bind(this);
        // this.foto8Show = this.foto8Show.bind(this);
        this.foto8Delete = this.foto8Delete.bind(this);


        this.formAddProduk = React.createRef();
        this.nama_produkInput = React.createRef();
        this.fotoUtamaInput = React.createRef();
        this.foto1Input = React.createRef();
        this.foto2Input = React.createRef();
        this.foto3Input = React.createRef();
        this.foto4Input = React.createRef();
        this.foto5Input = React.createRef();
        this.foto6Input = React.createRef();
        this.foto7Input = React.createRef();
        this.foto8Input = React.createRef();

        this.addKategoriSubmit = this.addKategoriSubmit.bind(this);
        this.closeKategori = React.createRef();
        this.addWarnaSubmit = this.addWarnaSubmit.bind(this);
        this.closeWarna = React.createRef();
        this.addUkuranSubmit = this.addUkuranSubmit.bind(this);
        this.closeUkuran = React.createRef();

        this.getApikategoriList = this.getApikategoriList.bind(this);
        this.getApiwarnaList = this.getApiwarnaList.bind(this);
        this.getApiukuranList = this.getApiukuranList.bind(this);

    }

    getApikategoriList(e){
        axios.get(uAPIlocal+'/api/v1/categorylist')
        // .then(function(response) {
        //     return response;
        // })
        // .then(response => {
        //     var data = response.data.results;
        //     this.setState({
        //         kategoriList: data
        //     },()=>console.log(this.state.kategoriList));
        // })
        .then(response => 
            response.data.results.map(kategoriList => ({
                value: `${kategoriList}`,
                label: `${kategoriList}`,
            }))
        )
        .then(kategoriList => {
            this.setState({
                kategoriList
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    getApiwarnaList(e){
        axios.get(uAPIlocal+'/api/v1/colorlist')
        // .then(function(response) {
        //     return response;
        // })
        // .then(response => {
        //     var data = response.data.results;
        //     this.setState({
        //         warnaList: data
        //     });
        // })
        .then(response => 
            response.data.results.map(warnaList => ({
                value: `${warnaList}`,
                label: `${warnaList}`,
            }))
        )
        .then(warnaList => {
            this.setState({
                warnaList
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    getApiukuranList(e){
        axios.get(uAPIlocal+'/api/v1/sizelist')
        // .then(function(response) {
        //     return response;
        // })
        // .then(response => {
        //     var data = response.data.results;
        //     this.setState({
        //         ukuranList: data
        //     });
        // })
        .then(response => 
            response.data.results.map(ukuranList => ({
                value: `${ukuranList}`,
                label: `${ukuranList}`,
            }))
        )
        .then(ukuranList => {
            this.setState({
                ukuranList
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    addKategoriSubmit(e){
        e.preventDefault();
        const data = {value:this.nama_kategori.value, label:this.nama_kategori.value};
        var Obj = [];
        this.state.kategoriList.forEach(el => {
            Obj.push(
                el.value,
            )
        });
        const onTheList = Obj.includes(data.value);
        if (onTheList) {
            this.setState({duplikat: 'duplikat'})
        } else {
            data !== '' && this.setState({
                kategoriList: [...this.state.kategoriList, data],
                duplikat: ''
            },()=>console.log(this.state))
            this.addKategori.reset();
            this.closeKategori.current.click();
        }
        
        
    }
    addWarnaSubmit(e){
        e.preventDefault();
        const data = {value:this.nama_warna.value, label:this.nama_warna.value};
        var Obj = [];
        this.state.warnaList.forEach(el => {
            Obj.push(
                el.value,
            )
        });
        const onTheList = Obj.includes(data.value);

        if (onTheList) {
            this.setState({duplikat2: 'duplikat'})
        } else {
            this.setState({
                warnaList: [...this.state.warnaList, data],
                duplikat2: ''
            })
            
            this.addWarna.reset();
            this.closeWarna.current.click();
        }
    }
    addUkuranSubmit(e){
        e.preventDefault();
        // var data = this.nama_ukuran.value;
        // const onTheList = this.state.ukuranList.includes(data);
        const data = {value:this.nama_ukuran.value, label:this.nama_ukuran.value};
        var Obj = [];
        this.state.ukuranList.forEach(el => {
            Obj.push(
                el.value,
            )
        });
        const onTheList = Obj.includes(data.value);

        if (onTheList) {
            this.setState({duplikat3: 'duplikat'})
        } else {
            this.setState({
                ukuranList: [...this.state.ukuranList, data],
                duplikat3: ''
            })

            this.addUkuran.reset();
            this.closeUkuran.current.click();
        }
    }

    addProdukChange(e) {
        let newaddProduk = { ...this.state.addProduk };
        newaddProduk[e.target.name] = e.target.value;
        this.setState({
            addProduk: newaddProduk
        });
    }
    
    kategoriChange(e){
        // let options = { ...this.state.addProduk.kategori };
        // options = e.target.options;
        // console.log(options)
        // var value = [];
        // for (var i = 0, l = options.length; i < l; i++) {
        //     if (options[i].selected) {
        //     value.push(options[i].value);
        //     }
        // }

        var value = [];
        if (e) {
            e.forEach(el => {
                value.push(
                    {value: el.value, label: el.label}
                )
            });
        }
        
        var val = value.map(a => a.value).join(",");
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                kategori: val
            }
        });
    }

    warnaChange(e){
        // let options = { ...this.state.addProduk.warna };
        // options = e.target.options;
        // var value = [];
        // for (var i = 0, l = options.length; i < l; i++) {
        //     if (options[i].selected) {
        //     value.push(options[i].value);
        //     }
        // }
        // this.setState({
        //     addProduk:{
        //         ...this.state.addProduk,
        //         warna: value
        //     }
        // });

        var value = [];
        if (e) {
            e.forEach(el => {
                value.push(
                    {value: el.value, label: el.label}
                )
            });
        }
        
        var val = value.map(a => a.value).join(",");
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                warna: val
            }
        });
    }

    ukuranChange(e){
        // let options = { ...this.state.addProduk.ukuran };
        // options = e.target.options;
        // var value = [];
        // for (var i = 0, l = options.length; i < l; i++) {
        //     if (options[i].selected) {
        //     value.push(options[i].value);
        //     }
        // }
        // this.setState({
        //     addProduk:{
        //         ...this.state.addProduk,
        //         ukuran: value
        //     }
        // });

        var value = [];
        if (e) {
            e.forEach(el => {
                value.push(
                    {value: el.value, label: el.label}
                )
            });
        }
        
        var val = value.map(a => a.value).join(",");
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                ukuran: val
            }
        });
    }

    fotoUtamaReset(e){
        e.target.value=''
    }
    fotoUtamaChange(e){
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto_utama: {
                    icon: false,
                    //show imagenya
                    preview: URL.createObjectURL(img),

                    //show data imagenya
                    raw: img,
                }
                
            }
          });
        }
    };
    fotoUtamaAdd(e){
        this.fotoUtamaInput.current.click();
    }
    fotoUtamaDelete(e){
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto_utama: {
                    icon: true,
                    preview: '',
                    raw: '',
                }
                
            }
        });
    }

    foto1Reset(e){
        e.target.value=''
    }
    foto1Change(e){
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto1: {
                    icon: false,
                    //show imagenya
                    preview: URL.createObjectURL(img),

                    //show data imagenya
                    raw: img,
                }
                
            }
          });
        }
    };
    foto1Add(e){
        this.foto1Input.current.click();
    }
    foto1Delete(e){
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto1: {
                    icon: true,
                    preview: '',
                    raw: '',
                }
                
            }
        });
    }

    foto2Reset(e){
        e.target.value=''
    }
    foto2Change(e){
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto2: {
                    icon: false,
                    //show imagenya
                    preview: URL.createObjectURL(img),

                    //show data imagenya
                    raw: img,
                }
                
            }
          });
        }
    };
    foto2Add(e){
        this.foto2Input.current.click();
    }
    foto2Delete(e){
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto2: {
                    icon: true,
                    preview: '',
                    raw: '',
                }
                
            }
        });
    }

    foto3Reset(e){
        e.target.value=''
    }
    foto3Change(e){
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto3: {
                    icon: false,
                    //show imagenya
                    preview: URL.createObjectURL(img),

                    //show data imagenya
                    raw: img,
                }
                
            }
          });
        }
    };
    foto3Add(e){
        this.foto3Input.current.click();
    }
    foto3Delete(e){
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto3: {
                    icon: true,
                    preview: '',
                    raw: '',
                }
                
            }
        });
    }

    foto4Reset(e){
        e.target.value=''
    }
    foto4Change(e){
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto4: {
                    icon: false,
                    //show imagenya
                    preview: URL.createObjectURL(img),

                    //show data imagenya
                    raw: img,
                }
                
            }
          });
        }
    };
    foto4Add(e){
        this.foto4Input.current.click();
    }
    foto4Delete(e){
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto4: {
                    icon: true,
                    preview: '',
                    raw: '',
                }
                
            }
        });
    }

    foto5Reset(e){
        e.target.value=''
    }
    foto5Change(e){
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto5: {
                    icon: false,
                    //show imagenya
                    preview: URL.createObjectURL(img),

                    //show data imagenya
                    raw: img,
                }
                
            }
          });
        }
    };
    foto5Add(e){
        this.foto5Input.current.click();
    }
    foto5Delete(e){
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto5: {
                    icon: true,
                    preview: '',
                    raw: '',
                }
                
            }
        });
    }

    foto6Reset(e){
        e.target.value=''
    }
    foto6Change(e){
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto6: {
                    icon: false,
                    //show imagenya
                    preview: URL.createObjectURL(img),

                    //show data imagenya
                    raw: img,
                }
                
            }
          });
        }
    };
    foto6Add(e){
        this.foto6Input.current.click();
    }
    foto6Delete(e){
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto6: {
                    icon: true,
                    preview: '',
                    raw: '',
                }
                
            }
        });
    }

    foto7Reset(e){
        e.target.value=''
    }
    foto7Change(e){
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto7: {
                    icon: false,
                    //show imagenya
                    preview: URL.createObjectURL(img),

                    //show data imagenya
                    raw: img,
                }
                
            }
          });
        }
    };
    foto7Add(e){
        this.foto7Input.current.click();
    }
    foto7Delete(e){
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto7: {
                    icon: true,
                    preview: '',
                    raw: '',
                }
                
            }
        });
    }

    foto8Reset(e){
        e.target.value=''
    }
    foto8Change(e){
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
          this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto8: {
                    icon: false,
                    //show imagenya
                    preview: URL.createObjectURL(img),

                    //show data imagenya
                    raw: img,
                }
                
            }
          });
        }
    };
    foto8Add(e){
        this.foto8Input.current.click();
    }
    foto8Delete(e){
        this.setState({
            addProduk:{
                ...this.state.addProduk,
                foto8: {
                    icon: true,
                    preview: '',
                    raw: '',
                }
                
            }
        });
    }


    // onImageChange(e){
    //     if (e.target.files && e.target.files[0]) {
    //       let img = e.target.files[0];
    //       this.setState({
    //         addProduk:{
    //             ...this.state.addProduk,
    //             foto_utama: {
    //                 icon: false,
    //                 //show imagenya
    //                 preview: URL.createObjectURL(img),

    //                 //show data imagenya
    //                 raw: img,
    //             }
                
    //         }
    //       });
    //     }
    // };

    // onImageClick(e){
    //     // alert('click')
    //     // this.refs.fileUploader.click();
    //     this.fotoUtamaInput.current.click();
    // }

    addProdukSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        formData.append('nama_produk',this.state.addProduk.nama_produk);
        formData.append('deskripsi_produk',this.state.addProduk.deskripsi_produk);
        formData.append('kategori',this.state.addProduk.kategori);
        formData.append('warna',this.state.addProduk.warna);
        formData.append('ukuran',this.state.addProduk.ukuran);
        formData.append('harga',this.state.addProduk.harga);
        formData.append('stok',this.state.addProduk.stok);
        formData.append('foto_utama',this.state.addProduk.foto_utama.raw);
        formData.append('foto1',this.state.addProduk.foto1.raw);
        formData.append('foto2',this.state.addProduk.foto2.raw);
        formData.append('foto3',this.state.addProduk.foto3.raw);
        formData.append('foto4',this.state.addProduk.foto4.raw);
        formData.append('foto5',this.state.addProduk.foto5.raw);
        formData.append('foto6',this.state.addProduk.foto6.raw);
        formData.append('foto7',this.state.addProduk.foto7.raw);
        formData.append('foto8',this.state.addProduk.foto8.raw);
        formData.append('berat',this.state.addProduk.berat);
        formData.append('kondisi',this.state.addProduk.kondisi);
        formData.append('slide',this.state.addProduk.slide);

        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }

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
                
                if (this.state.addProduk.foto_utama.icon === true) {
                    Swal.fire({
                        title: 'Oops!',
                        text: 'Foto Produk Utama Tidak Ada!',
                        icon: 'error',
                        allowOutsideClick: false
                    })
                } else {
                    return axios.post(uAPIlocal+'/api/v1/produk',formData,config)
                    .then(function(response) {
                        //status 406 = data sudah ada (not acceptable)
                        if (response.data.status === 406 ) {
                            Swal.fire({
                                title: 'Oops...!',
                                html: response.data.message,
                                icon: 'error',
                                allowOutsideClick: false,
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        Swal.fire('Oops...', 'Something went wrong!', 'error');
                    });
                    
                }
            }
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Success tambah produk',
                    icon: 'success',
                    allowOutsideClick: false,
                })
                .then(() => this.setState({ redirect: true }))
            }
        })
        
        
        // Swal.fire({
        //     title: 'Are you sure?',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes!',
        //     allowOutsideClick: false
        // }).then((result) => {
        //     if (result.value) {
        //         axios.put('http://localhost:8080/api/v1/banklist',{
        //             id: this.state.dataBank.id,
        //             bank_name: this.state.dataBank.bank_name,
        //             bank_rekening: this.state.dataBank.bank_rekening,
        //             bank_name_rekening: this.state.dataBank.bank_name_rekening,
        //         })
        //         .then(
        //             () => Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Success edit rekening bank',
        //                 icon: 'success',
        //                 allowOutsideClick: false,
        //             }).then(() => this.setState({ redirect: true }))
        //         )
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        //     }
        // })
    }

    componentDidMount(){
        this.getApikategoriList();
        this.getApiwarnaList();
        this.getApiukuranList();
        // $('.select2').select2();
        // $('.select2[name="kategori"]').on("change", this.kategoriChange);
        // $('.select2[name="warna"]').on("change", this.warnaChange);
        // $('.select2[name="ukuran"]').on("change", this.ukuranChange);
        // $('.select2[name="kondisi"]').on("change", this.addProdukChange);

        // $('#addKategori').submit(function(e) {
        //     e.preventDefault();

        //     var data = $("#addKategori :input").serialize();
            
        //     // $.ajax({
        //     //     url:'http://smartstock.api-8.online/api/AddJob.php',
        //     //     // url:'http://localhost/dini/api/AddJob.php',
        //     //     type:'GET',
        //     //     data: data,
        //     //     success:function(result){
        //     //         $("#addJob")[0].reset();
        //     //         $("#modal-default").modal('hide');
        //     //     }

        //     // });
        // });
    }
    
    render() {
        if (this.state.redirect) {
            return (<Redirect to="/admin/online-store" />)
        }
        // const { selectedOption } = this.state;
        return (
            <div>
                <section className="content" style={{paddingTop:"20px"}}>
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Tambah Produk</h3>
                            </div>
                            <div className="card-body">
                                <form ref={form => this.formAddProduk = form} onSubmit={e => this.addProdukSubmit(e)} className="form-horizontal" style={{padding:"10px"}}>
                                    <h4 style={{ paddingBottom:'15px'}}>Informasi Produk</h4>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Nama Produk</label>
                                        <div className="col-sm-10">
                                            <input type="text" ref={this.nama_produkInput} className="form-control" name="nama_produk" value={this.state.addProduk.nama_produk} onChange={this.addProdukChange} required/>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Deskripsi Produk</label>
                                        <div className="col-sm-10">
                                            <textarea name="deskripsi_produk" className="form-control" value={this.state.addProduk.deskripsi_produk} onChange={this.addProdukChange} rows='9' required/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Kategori</label>
                                        <div className="col-sm-4">
                                            <Select
                                                placeholder='Pilih kategori'
                                                onChange={this.kategoriChange}
                                                options={this.state.kategoriList}
                                                isMulti
                                            />
                                        {/* {
                                            this.state.kategoriList ? (
                                                <select className="select2" multiple={true} data-placeholder="Buat Kategori" name="kategori" value={this.state.addProduk.kategori} onChange={this.kategoriChange} style={{ width:'100%'}} required>
                                                    {
                                                        this.state.kategoriList.map((value, index) => {
                                                            return(
                                                            <option key={index} value={value}>{value}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            ):(
                                                <select className="select2" multiple={true} data-placeholder="Buat Kategori" name="kategori" value={this.state.addProduk.kategori} onChange={this.kategoriChange} style={{ width:'100%'}} required>
                                                
                                                </select>
                                            )
                                        } */}
                                        </div>
                                        <div className="col-sm-2 col-form-label">
                                            <Link to='#' data-toggle="modal" data-target="#modal-kategori" >Buat Kategori Baru</Link>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Warna</label>
                                        <div className="col-sm-4">
                                            <Select
                                                placeholder='Pilih warna'
                                                onChange={this.warnaChange}
                                                options={this.state.warnaList}
                                                isMulti
                                            />
                                        {/* {
                                            this.state.warnaList ? (
                                                <select className="select2" multiple={true} data-placeholder="Buat Warna" name="warna" value={this.state.addProduk.warna} onChange={this.warnaChange} style={{ width:'100%'}} required>
                                                {
                                                    this.state.warnaList.map((value, index) => {
                                                        return(
                                                        <option key={index} value={value}>{value}</option>
                                                        )
                                                    })
                                                }
                                                </select>
                                            ):(
                                                <select className="select2" multiple={true} data-placeholder="Buat Warna" name="warna" value={this.state.addProduk.warna} onChange={this.warnaChange} style={{ width:'100%'}} required>
                                                
                                                </select>
                                            )
                                        } */}
                                        </div>
                                        <div className="col-sm-2 col-form-label">
                                            <Link to='#' data-toggle="modal" data-target="#modal-warna" >Buat Warna Baru</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Ukuran</label>
                                        <div className="col-sm-4">
                                            <Select
                                                placeholder='Pilih ukuran'
                                                onChange={this.ukuranChange}
                                                options={this.state.ukuranList}
                                                isMulti
                                            />
                                        {/* {
                                            this.state.ukuranList ? (
                                                <select className="select2" multiple={true} data-placeholder="Buat Ukuran" name="ukuran" value={this.state.addProduk.ukuran} onChange={this.ukuranChange} style={{ width:'100%'}} required>
                                                {
                                                    this.state.ukuranList.map((value, index) => {
                                                        return(
                                                        <option key={index} value={value}>{value}</option>
                                                        )
                                                    })
                                                }
                                                </select>
                                            ):(
                                                <select className="select2" multiple={true} data-placeholder="Buat Ukuran" name="ukuran" value={this.state.addProduk.ukuran} onChange={this.ukuranChange} style={{ width:'100%'}} required>
                                                   
                                                </select>
                                            )
                                        } */}
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
                                            <input type="tel" className="form-control" name="harga" value={this.state.addProduk.harga} onChange={this.addProdukChange} placeholder='50000' required/>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Stok</label>
                                        <div className="col-sm-4">
                                            <input type="number" className="form-control" name="stok" value={this.state.addProduk.stok} onChange={this.addProdukChange} min="1" required/>
                                        </div>
                                    </div>

                                    <hr/>

                                    <h4 style={{ paddingBottom:'15px'}}>Pengaturan Media</h4>

                                    <div className="form-group row">
                                        
                                            <label className="col-sm-2 col-form-label">Foto Produk</label>
                                            <div className="col-sm-10 row">
                                                <div className="col-sm-2 text-center" >
                                                    <div style={{border:'2px dashed red'}}>
                                                        <div style={{ 
                                                            // marginTop:'22px', marginBottom:'22px',
                                                            // position: 'relative',
                                                            width: '100%',
                                                            height: 'auto',
                                                            }}>
                                                            {
                                                                this.state.addProduk.foto_utama.icon ? (
                                                                    <FontAwesomeIcon onClick={this.fotoUtamaAdd} icon={faPlus} color='red' style={{
                                                                        cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                        // position: 'relative', 
                                                                        // top: '42px', 
                                                                        // left: '46px',
                                                                        display: 'inline-block',
                                                                        position: 'relative',
                                                                        top: '2px',
                                                                        margin: '40px',
                                                                    }} />
                                                                ):(
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        display: 'inline-block',
                                                                        padding: '5px',
                                                                    }}>
                                                                        <img src={this.state.addProduk.foto_utama.preview} alt={this.state.addProduk.foto_utama.raw.name} style={{
                                                                            width: '100%',height: 'auto',
                                                                        }}/>
                                                                        <div style={{
                                                                            position:'relative',
                                                                            top:'4px'
                                                                        }}>
                                                                            <FontAwesomeIcon onClick={this.fotoUtamaDelete} icon={faTrash} color='red' style={{
                                                                                cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                right: '-32%', 
                                                                            }} />
                                                                            <Link to='#' data-toggle="modal" data-target="#modal-fotoUtama" >
                                                                            <FontAwesomeIcon icon={faEye} color='green' style={{
                                                                                cursor:'pointer', border:'2px dashed green', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                left: '-32%', 
                                                                            }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ) 
                                                            }
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <p>Foto Utama</p>
                                                    <input id="foto_utama" type="file" ref={this.fotoUtamaInput} style={{ display: "none" }} name="foto_utama" onChange={this.fotoUtamaChange} onClick={this.fotoUtamaReset}/>
                                                </div>

                                                <div className="col-sm-2 text-center" >
                                                    <div style={{border:'2px dashed red'}}>
                                                        <div style={{ 
                                                            // marginTop:'22px', marginBottom:'22px',
                                                            // position: 'relative',
                                                            width: '100%',
                                                            height: 'auto',
                                                            }}>
                                                            {
                                                                this.state.addProduk.foto1.icon ? (
                                                                    <FontAwesomeIcon onClick={this.foto1Add} icon={faPlus} color='red' style={{
                                                                        cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                        // position: 'relative', 
                                                                        // top: '42px', 
                                                                        // left: '46px',
                                                                        display: 'inline-block',
                                                                        position: 'relative',
                                                                        top: '2px',
                                                                        margin: '40px',
                                                                    }} />
                                                                ):(
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        display: 'inline-block',
                                                                        padding: '5px',
                                                                    }}>
                                                                        <img src={this.state.addProduk.foto1.preview} alt={this.state.addProduk.foto1.raw.name} style={{
                                                                            width: '100%',height: 'auto',
                                                                        }}/>
                                                                        <div style={{
                                                                            position:'relative',
                                                                            top:'4px'
                                                                        }}>
                                                                            <FontAwesomeIcon onClick={this.foto1Delete} icon={faTrash} color='red' style={{
                                                                                cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                right: '-32%', 
                                                                            }} />
                                                                            <Link to='#' data-toggle="modal" data-target="#modal-foto1" >
                                                                            <FontAwesomeIcon icon={faEye} color='green' style={{
                                                                                cursor:'pointer', border:'2px dashed green', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                left: '-32%', 
                                                                            }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ) 
                                                            }
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <p>Foto 1</p>
                                                    <input id="foto1" type="file" ref={this.foto1Input} style={{ display: "none" }} name="foto1" onChange={this.foto1Change} onClick={this.foto1Reset} />
                                                </div>

                                                <div className="col-sm-2 text-center" >
                                                    <div style={{border:'2px dashed red'}}>
                                                        <div style={{ 
                                                            // marginTop:'22px', marginBottom:'22px',
                                                            // position: 'relative',
                                                            width: '100%',
                                                            height: 'auto',
                                                            }}>
                                                            {
                                                                this.state.addProduk.foto2.icon ? (
                                                                    <FontAwesomeIcon onClick={this.foto2Add} icon={faPlus} color='red' style={{
                                                                        cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                        // position: 'relative', 
                                                                        // top: '42px', 
                                                                        // left: '46px',
                                                                        display: 'inline-block',
                                                                        position: 'relative',
                                                                        top: '2px',
                                                                        margin: '40px',
                                                                    }} />
                                                                ):(
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        display: 'inline-block',
                                                                        padding: '5px',
                                                                    }}>
                                                                        <img src={this.state.addProduk.foto2.preview} alt={this.state.addProduk.foto2.raw.name} style={{
                                                                            width: '100%',height: 'auto',
                                                                        }}/>
                                                                        <div style={{
                                                                            position:'relative',
                                                                            top:'4px'
                                                                        }}>
                                                                            <FontAwesomeIcon onClick={this.foto2Delete} icon={faTrash} color='red' style={{
                                                                                cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                right: '-32%', 
                                                                            }} />
                                                                            <Link to='#' data-toggle="modal" data-target="#modal-foto2" >
                                                                            <FontAwesomeIcon icon={faEye} color='green' style={{
                                                                                cursor:'pointer', border:'2px dashed green', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                left: '-32%', 
                                                                            }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ) 
                                                            }
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <p>Foto 2</p>
                                                    <input id="foto2" type="file" ref={this.foto2Input} style={{ display: "none" }} name="foto2" onChange={this.foto2Change} onClick={this.foto2Reset} />
                                                </div>

                                                <div className="col-sm-2 text-center" >
                                                    <div style={{border:'2px dashed red'}}>
                                                        <div style={{ 
                                                            // marginTop:'22px', marginBottom:'22px',
                                                            // position: 'relative',
                                                            width: '100%',
                                                            height: 'auto',
                                                            }}>
                                                            {
                                                                this.state.addProduk.foto3.icon ? (
                                                                    <FontAwesomeIcon onClick={this.foto3Add} icon={faPlus} color='red' style={{
                                                                        cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                        // position: 'relative', 
                                                                        // top: '42px', 
                                                                        // left: '46px',
                                                                        display: 'inline-block',
                                                                        position: 'relative',
                                                                        top: '2px',
                                                                        margin: '40px',
                                                                    }} />
                                                                ):(
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        display: 'inline-block',
                                                                        padding: '5px',
                                                                    }}>
                                                                        <img src={this.state.addProduk.foto3.preview} alt={this.state.addProduk.foto3.raw.name} style={{
                                                                            width: '100%',height: 'auto',
                                                                        }}/>
                                                                        <div style={{
                                                                            position:'relative',
                                                                            top:'4px'
                                                                        }}>
                                                                            <FontAwesomeIcon onClick={this.foto3Delete} icon={faTrash} color='red' style={{
                                                                                cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                right: '-32%', 
                                                                            }} />
                                                                            <Link to='#' data-toggle="modal" data-target="#modal-foto3" >
                                                                            <FontAwesomeIcon icon={faEye} color='green' style={{
                                                                                cursor:'pointer', border:'2px dashed green', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                left: '-32%', 
                                                                            }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ) 
                                                            }
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <p>Foto 3</p>
                                                    <input id="foto3" type="file" ref={this.foto3Input} style={{ display: "none" }} name="foto3" onChange={this.foto3Change} onClick={this.foto3Reset} />
                                                </div>

                                                <div className="col-sm-2 text-center" >
                                                    <div style={{border:'2px dashed red'}}>
                                                        <div style={{ 
                                                            // marginTop:'22px', marginBottom:'22px',
                                                            // position: 'relative',
                                                            width: '100%',
                                                            height: 'auto',
                                                            }}>
                                                            {
                                                                this.state.addProduk.foto4.icon ? (
                                                                    <FontAwesomeIcon onClick={this.foto4Add} icon={faPlus} color='red' style={{
                                                                        cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                        // position: 'relative', 
                                                                        // top: '42px', 
                                                                        // left: '46px',
                                                                        display: 'inline-block',
                                                                        position: 'relative',
                                                                        top: '2px',
                                                                        margin: '40px',
                                                                    }} />
                                                                ):(
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        display: 'inline-block',
                                                                        padding: '5px',
                                                                    }}>
                                                                        <img src={this.state.addProduk.foto4.preview} alt={this.state.addProduk.foto4.raw.name} style={{
                                                                            width: '100%',height: 'auto',
                                                                        }}/>
                                                                        <div style={{
                                                                            position:'relative',
                                                                            top:'4px'
                                                                        }}>
                                                                            <FontAwesomeIcon onClick={this.foto4Delete} icon={faTrash} color='red' style={{
                                                                                cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                right: '-32%', 
                                                                            }} />
                                                                            <Link to='#' data-toggle="modal" data-target="#modal-foto4" >
                                                                            <FontAwesomeIcon icon={faEye} color='green' style={{
                                                                                cursor:'pointer', border:'2px dashed green', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                left: '-32%', 
                                                                            }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ) 
                                                            }
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <p>Foto 4</p>
                                                    <input id="foto4" type="file" ref={this.foto4Input} style={{ display: "none" }} name="foto4" onChange={this.foto4Change} onClick={this.foto4Reset} />
                                                </div>

                                                <div className="col-sm-2 text-center" >
                                                    <div style={{border:'2px dashed red'}}>
                                                        <div style={{ 
                                                            // marginTop:'22px', marginBottom:'22px',
                                                            // position: 'relative',
                                                            width: '100%',
                                                            height: 'auto',
                                                            }}>
                                                            {
                                                                this.state.addProduk.foto5.icon ? (
                                                                    <FontAwesomeIcon onClick={this.foto5Add} icon={faPlus} color='red' style={{
                                                                        cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                        // position: 'relative', 
                                                                        // top: '42px', 
                                                                        // left: '46px',
                                                                        display: 'inline-block',
                                                                        position: 'relative',
                                                                        top: '2px',
                                                                        margin: '40px',
                                                                    }} />
                                                                ):(
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        display: 'inline-block',
                                                                        padding: '5px',
                                                                    }}>
                                                                        <img src={this.state.addProduk.foto5.preview} alt={this.state.addProduk.foto5.raw.name} style={{
                                                                            width: '100%',height: 'auto',
                                                                        }}/>
                                                                        <div style={{
                                                                            position:'relative',
                                                                            top:'4px'
                                                                        }}>
                                                                            <FontAwesomeIcon onClick={this.foto5Delete} icon={faTrash} color='red' style={{
                                                                                cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                right: '-32%', 
                                                                            }} />
                                                                            <Link to='#' data-toggle="modal" data-target="#modal-foto5" >
                                                                            <FontAwesomeIcon icon={faEye} color='green' style={{
                                                                                cursor:'pointer', border:'2px dashed green', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                left: '-32%', 
                                                                            }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ) 
                                                            }
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <p>Foto 5</p>
                                                    <input id="foto5" type="file" ref={this.foto5Input} style={{ display: "none" }} name="foto5" onChange={this.foto5Change} onClick={this.foto5Reset} />
                                                </div>

                                                <div className="col-sm-2 text-center" >
                                                    <div style={{border:'2px dashed red'}}>
                                                        <div style={{ 
                                                            // marginTop:'22px', marginBottom:'22px',
                                                            // position: 'relative',
                                                            width: '100%',
                                                            height: 'auto',
                                                            }}>
                                                            {
                                                                this.state.addProduk.foto6.icon ? (
                                                                    <FontAwesomeIcon onClick={this.foto6Add} icon={faPlus} color='red' style={{
                                                                        cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                        // position: 'relative', 
                                                                        // top: '42px', 
                                                                        // left: '46px',
                                                                        display: 'inline-block',
                                                                        position: 'relative',
                                                                        top: '2px',
                                                                        margin: '40px',
                                                                    }} />
                                                                ):(
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        display: 'inline-block',
                                                                        padding: '5px',
                                                                    }}>
                                                                        <img src={this.state.addProduk.foto6.preview} alt={this.state.addProduk.foto6.raw.name} style={{
                                                                            width: '100%',height: 'auto',
                                                                        }}/>
                                                                        <div style={{
                                                                            position:'relative',
                                                                            top:'4px'
                                                                        }}>
                                                                            <FontAwesomeIcon onClick={this.foto6Delete} icon={faTrash} color='red' style={{
                                                                                cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                right: '-32%', 
                                                                            }} />
                                                                            <Link to='#' data-toggle="modal" data-target="#modal-foto6" >
                                                                            <FontAwesomeIcon icon={faEye} color='green' style={{
                                                                                cursor:'pointer', border:'2px dashed green', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                left: '-32%', 
                                                                            }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ) 
                                                            }
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <p>Foto 6</p>
                                                    <input id="foto6" type="file" ref={this.foto6Input} style={{ display: "none" }} name="foto6" onChange={this.foto6Change} onClick={this.foto6Reset} />
                                                </div>

                                                <div className="col-sm-2 text-center" >
                                                    <div style={{border:'2px dashed red'}}>
                                                        <div style={{ 
                                                            // marginTop:'22px', marginBottom:'22px',
                                                            // position: 'relative',
                                                            width: '100%',
                                                            height: 'auto',
                                                            }}>
                                                            {
                                                                this.state.addProduk.foto7.icon ? (
                                                                    <FontAwesomeIcon onClick={this.foto7Add} icon={faPlus} color='red' style={{
                                                                        cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                        // position: 'relative', 
                                                                        // top: '42px', 
                                                                        // left: '46px',
                                                                        display: 'inline-block',
                                                                        position: 'relative',
                                                                        top: '2px',
                                                                        margin: '40px',
                                                                    }} />
                                                                ):(
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        display: 'inline-block',
                                                                        padding: '5px',
                                                                    }}>
                                                                        <img src={this.state.addProduk.foto7.preview} alt={this.state.addProduk.foto7.raw.name} style={{
                                                                            width: '100%',height: 'auto',
                                                                        }}/>
                                                                        <div style={{
                                                                            position:'relative',
                                                                            top:'4px'
                                                                        }}>
                                                                            <FontAwesomeIcon onClick={this.foto7Delete} icon={faTrash} color='red' style={{
                                                                                cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                right: '-32%', 
                                                                            }} />
                                                                            <Link to='#' data-toggle="modal" data-target="#modal-foto7" >
                                                                            <FontAwesomeIcon icon={faEye} color='green' style={{
                                                                                cursor:'pointer', border:'2px dashed green', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                left: '-32%', 
                                                                            }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ) 
                                                            }
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <p>Foto 7</p>
                                                    <input id="foto7" type="file" ref={this.foto7Input} style={{ display: "none" }} name="foto7" onChange={this.foto7Change} onClick={this.foto7Reset} />
                                                </div>

                                                <div className="col-sm-2 text-center" >
                                                    <div style={{border:'2px dashed red'}}>
                                                        <div style={{ 
                                                            // marginTop:'22px', marginBottom:'22px',
                                                            // position: 'relative',
                                                            width: '100%',
                                                            height: 'auto',
                                                            }}>
                                                            {
                                                                this.state.addProduk.foto8.icon ? (
                                                                    <FontAwesomeIcon onClick={this.foto8Add} icon={faPlus} color='red' style={{
                                                                        cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                        // position: 'relative', 
                                                                        // top: '42px', 
                                                                        // left: '46px',
                                                                        display: 'inline-block',
                                                                        position: 'relative',
                                                                        top: '2px',
                                                                        margin: '40px',
                                                                    }} />
                                                                ):(
                                                                    <div style={{
                                                                        position: 'relative',
                                                                        display: 'inline-block',
                                                                        padding: '5px',
                                                                    }}>
                                                                        <img src={this.state.addProduk.foto8.preview} alt={this.state.addProduk.foto8.raw.name} style={{
                                                                            width: '100%',height: 'auto',
                                                                        }}/>
                                                                        <div style={{
                                                                            position:'relative',
                                                                            top:'4px'
                                                                        }}>
                                                                            <FontAwesomeIcon onClick={this.foto8Delete} icon={faTrash} color='red' style={{
                                                                                cursor:'pointer', border:'2px dashed red', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                right: '-32%', 
                                                                            }} />
                                                                            <Link to='#' data-toggle="modal" data-target="#modal-foto8" >
                                                                            <FontAwesomeIcon icon={faEye} color='green' style={{
                                                                                cursor:'pointer', border:'2px dashed green', borderRadius:'100%', padding:'4px', width:'29px', height:'29px',
                                                                                position: 'relative', 
                                                                                left: '-32%', 
                                                                            }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ) 
                                                            }
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <p>Foto 8</p>
                                                    <input id="foto8" type="file" ref={this.foto8Input} style={{ display: "none" }} name="foto8" onChange={this.foto8Change} onClick={this.foto8Reset} />
                                                </div>


                                            </div>
                                    </div>
                                    
                                    {/* <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Video</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" name="video" value='' placeholder="Ex: BCA"/>
                                        </div>
                                    </div> */}

                                    <hr/>

                                    <h4 style={{ paddingBottom:'15px'}}>Pengiriman</h4>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Berat</label>
                                        <div className="col-sm-4 input-group">
                                            <input type="text" className="form-control" name="berat" value={this.state.addProduk.berat} onChange={this.addProdukChange} required/>

                                            <div className="input-group-append">
                                                <span className="input-group-text">gr</span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr/>

                                    <h4 style={{ paddingBottom:'15px'}}>Lainnya</h4>

                                    {/* <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Pre-Order</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" name="pre_order" value='' placeholder="Ex: BCA"/>
                                        </div>
                                    </div> */}
                                    
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Kondisi</label>
                                        <div className="col-sm-4">
                                            <select className="form-control select2" name="kondisi" value={this.state.addProduk.kondisi} onChange={this.addProdukChange} required>
                                                <option value="new">Baru</option>
                                                <option value="used">Pernah Dipakai</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Slide</label>
                                        <div className="col-sm-4">
                                            <select className="form-control select2" name="slide" value={this.state.addProduk.slide} onChange={this.addProdukChange} required>
                                                <option value="N">No</option>
                                                <option value="Y">Yes</option>
                                            </select>
                                        </div>
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

                
                <div className="modal fade" id="modal-kategori">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Tambah Kategori</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="addKategori" ref={form => this.addKategori = form} onSubmit={e => this.addKategoriSubmit(e)} >
                                    <div className="form-group">
                                        <label htmlFor="nama_kategori">Nama Kategori</label>
                                        <input type="text" id="nama_kategori" name="nama_kategori" ref={nama_kategori => this.nama_kategori = nama_kategori} className="form-control" placeholder="Enter Nama Kategori" required />
                                        {
                                            this.state.duplikat !== '' && <span className='text-danger'>{this.state.duplikat}</span>
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <button  type="submit" className="btn btn-primary btn-block">Simpan</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button type="button" className="btn btn-default" data-dismiss="modal" ref={this.closeKategori}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-warna">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Tambah Warna</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="addWarna" ref={form => this.addWarna = form} onSubmit={e => this.addWarnaSubmit(e)} >
                                    <div className="form-group">
                                        <label htmlFor="nama_warna">Warna</label>
                                        <input type="text" id="nama_warna" name="nama_warna" ref={nama_warna => this.nama_warna = nama_warna} className="form-control" placeholder="Enter Warna" required />
                                        {
                                            this.state.duplikat2 !== '' && <span className='text-danger'>{this.state.duplikat2}</span>
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <button  type="submit" className="btn btn-primary btn-block">Simpan</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button type="button" className="btn btn-default" data-dismiss="modal" ref={this.closeWarna}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-ukuran">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Tambah Ukuran</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="addUkuran" ref={form => this.addUkuran = form} onSubmit={e => this.addUkuranSubmit(e)} >
                                    <div className="form-group">
                                        <label htmlFor="nama_ukuran">Ukuran</label>
                                        <input type="text" id="nama_ukuran" name="nama_ukuran" ref={nama_ukuran => this.nama_ukuran = nama_ukuran} className="form-control" placeholder="Enter Ukuran" required />
                                        {
                                            this.state.duplikat3 !== '' && <span className='text-danger'>{this.state.duplikat3}</span>
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <button  type="submit" className="btn btn-primary btn-block">Simpan</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button type="button" className="btn btn-default" data-dismiss="modal" ref={this.closeUkuran}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="modal-fotoUtama">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.addProduk.foto_utama.raw.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={this.state.addProduk.foto_utama.preview} alt={this.state.addProduk.foto_utama.raw.name} style={{width: '100%',height: 'auto',}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-foto1">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.addProduk.foto1.raw.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={this.state.addProduk.foto1.preview} alt={this.state.addProduk.foto1.raw.name} style={{width: '100%',height: 'auto',}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-foto2">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.addProduk.foto2.raw.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={this.state.addProduk.foto2.preview} alt={this.state.addProduk.foto2.raw.name} style={{width: '100%',height: 'auto',}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-foto3">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.addProduk.foto3.raw.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={this.state.addProduk.foto3.preview} alt={this.state.addProduk.foto3.raw.name} style={{width: '100%',height: 'auto',}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-foto4">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.addProduk.foto4.raw.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={this.state.addProduk.foto4.preview} alt={this.state.addProduk.foto4.raw.name} style={{width: '100%',height: 'auto',}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-foto5">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.addProduk.foto5.raw.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={this.state.addProduk.foto5.preview} alt={this.state.addProduk.foto5.raw.name} style={{width: '100%',height: 'auto',}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-foto6">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.addProduk.foto6.raw.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={this.state.addProduk.foto6.preview} alt={this.state.addProduk.foto6.raw.name} style={{width: '100%',height: 'auto',}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-foto7">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.addProduk.foto7.raw.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={this.state.addProduk.foto7.preview} alt={this.state.addProduk.foto7.raw.name} style={{width: '100%',height: 'auto',}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-foto8">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.addProduk.foto8.raw.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={this.state.addProduk.foto8.preview} alt={this.state.addProduk.foto8.raw.name} style={{width: '100%',height: 'auto',}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AddProduct;