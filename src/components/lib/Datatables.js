import React, { Component } from "react";
import "./datatables.min.css";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import axios from "axios";


const $ = require('jquery');
$.Datatable = require('datatables.net-bs4');

const uAPI = 'https://api-online-store-v1.herokuapp.com';
const uAPIlocal = 'http://localhost:8080';

class DtTable extends React.Component {
    render() {
        const id = this.props.id;
        return (
        <div className="table-responsive">
            <table id={id} className="table table-striped table-bordered" width="100%" >
                {/* <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Bank</th>
                    <th>No Rekening</th>
                    <th>Nama Rekening</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                
                <tfoot>
                <tr>
                <th>No</th>
                    <th>Nama Bank</th>
                    <th>No Rekening</th>
                    <th>Nama Rekening</th>
                    <th>Aksi</th>
                </tr>
                </tfoot> */}
            </table>
        </div>
        )
    }
}

class Datatables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
        }
        this.editProduk = this.editProduk.bind(this);
        this.deleteProduk = this.deleteProduk.bind(this);
        this.editBank = this.editBank.bind(this);
        this.deleteBank = this.deleteBank.bind(this);
        this.detailMember = this.detailMember.bind(this);
        this.detailMessage = this.detailMessage.bind(this);
    }

    editProduk(id){
        this.setState({ 
            redirect: '/admin/online-store/edit-product',
            url: '/admin/online-store/edit-product/'+id
        })
    }

    editBank(id){
        this.setState({ 
            redirect: '/admin/setting/edit-bank',
            url: '/admin/setting/edit-bank/'+id
        })
    }

    detailMember(id){
        this.setState({ 
            redirect: '/admin/member/detail',
            url: '/admin/member/detail/'+id
        })
    }

    detailMessage(id){
        this.setState({ 
            redirect: '/admin/message/detail',
            url: '/admin/message/detail/'+id
        })
    }

    deleteProduk(id, name){
        // e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: 'Hapus Produk: '+name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!',
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return axios.delete(uAPIlocal+'/api/v1/produk/'+id)
                // .then(
                //     () =>  Swal.fire({
                //         title: 'Success!',
                //         text: 'Success delete!',
                //         icon: 'success',
                //         allowOutsideClick: false,
                //     }).then(() => this.setState({ redirect: '/admin/setting' }))
                // )
                .catch(function (error) {
                    console.log(error);
                    Swal.fire('Oops...', 'Something went wrong!', 'error');
                });
            }
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Success delete produk!',
                    icon: 'success',
                    allowOutsideClick: false,
                }).then(() => this.setState({ redirect: '/admin/online-store' }))
            }
        })
    }

    deleteBank(id, name){
        // e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: 'Hapus rekening bank: '+name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!',
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return axios.delete(uAPIlocal+'/api/v1/banklist/'+id)
                // .then(
                //     () =>  Swal.fire({
                //         title: 'Success!',
                //         text: 'Success delete!',
                //         icon: 'success',
                //         allowOutsideClick: false,
                //     }).then(() => this.setState({ redirect: '/admin/setting' }))
                // )
                .catch(function (error) {
                    console.log(error);
                    Swal.fire('Oops...', 'Something went wrong!', 'error');
                });
            }
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Success delete bank!',
                    icon: 'success',
                    allowOutsideClick: false,
                }).then(() => this.setState({ redirect: '/admin/setting' }))
            }
        })
    }

    componentDidMount() {
        // console.log(this.props);
        // this.$el = $(this.el)
        // this.$el.DataTable(
        //     {
        //         data: this.props.data,
        //         // columns: [
        //         //     {title:"Name"},
        //         //     {title:"Position"},
        //         //     {title:"Office"},
        //         //     {title:"Extn."},
        //         //     {title:"Start date"},
        //         //     {title:"Salary"},
        //         // ],
        //         columns: this.props.columns
        //     }
        // )
        // $('#banklist').DataTable( {
        //     order: [[ 0, "desc" ]],
        //     // ajax: "http://localhost:8080/api/v1/dt/banklist"
        //     // ajax: {
        //     //     data: [
        //     //         [1,"BCA","1234567","Bayu Agung Gumelar",1],
        //     //         [2,"Mandiri","1234567","Bayu Agung Gumelar",2],
        //     //     ]
        //     // }
        //     ajax: {
        //         "url": "http://localhost:8080/api/v1/dt/banklist",
        //         "dataSrc": function ( json ) {
                    
        //             // console.log(json)
        //             // var i=0;
        //             // var ien=json.data.length ;
        //             // console.log(json.data.length)
        //             for ( var i=0, ien=json.data.length ; i<ien ; i++ ) {
        //                 // json.data[i][4] = '<a href="/message/'+json.data[i][4]+" className="btn btn-primary btn-icon-split" style={{ float:"right", marginRight:"4px"}}>
        //                     // <span className="icon text-white-50">
        //                     //     <FontAwesomeIcon icon={faEdit}/>
        //                     // </span>
        //                 //     <span className="text">Edit</span>
        //                 // </Link>
        //                 json.data[i][4] = '<a href="/admin/setting/edit-bank/'+json.data[i][4]+'"><span className="icon text-white-50">'+<FontAwesomeIcon icon={faEdit}/>+'</span><span className="text">Edit</span></a>';
        //               }
        //               console.log(json.data)
        //               return json.data;
        //           }
        //     }
        // } );

        $('#onlinestorelist').DataTable( {
            order: [[ 0, "desc" ]],
            ajax: uAPIlocal+"/api/v1/dt/produk",
            columns: [
                {title:"No"},
                {title:"Gambar"},
                {title:"Nama Produk"},
                {title:"Deskripsi"},
                {title:"Harga"},
                {title:"Stok"},
                {title:"Aksi"},
            ],
            columnDefs: [
                {
                    targets: 1,
                    createdCell: (td, cellData, rowData, row, col) =>
                        ReactDOM.render(
                            <BrowserRouter>
                            {/* {console.log('cellData: '+cellData)}
                            {console.log('rowData: '+rowData)}
                            {console.log('row: '+row)}
                            {console.log('col: '+col)} */}
                            <img src={uAPIlocal+'/'+rowData[1]} style={{ height:'120px'}} alt={rowData[2]}/>
                            
                            </BrowserRouter>, td),
                },
                {
                    targets: 4,
                    createdCell: (td, cellData, rowData, row, col) =>
                        ReactDOM.render(
                            <BrowserRouter>
                            {/* {console.log('cellData: '+cellData)}
                            {console.log('rowData: '+rowData)}
                            {console.log('row: '+row)}
                            {console.log('col: '+col)} */}
                            {'Rp.'+rowData[4]}
                            
                            </BrowserRouter>, td),
                },
                {
                    targets: -1,
                    createdCell: (td, cellData, rowData, row, col) =>
                        ReactDOM.render(
                            <BrowserRouter>
                            {/* {console.log('cellData: '+cellData)}
                            {console.log('rowData: '+rowData)}
                            {console.log('row: '+row)}
                            {console.log('col: '+col)} */}
                            <button type="button"  className="btn btn-primary btn-sm" onClick={() => this.editProduk(rowData[6])}> <FontAwesomeIcon icon={faEdit}/> Edit</button> <button type="button"  className="btn btn-danger btn-sm" onClick={() => this.deleteProduk(rowData[6], rowData[2])}> <FontAwesomeIcon icon={faTrash}/> Delete</button>
                            </BrowserRouter>, td),
                },
            ]   
        } );

        $('#banklist').DataTable( {
            order: [[ 0, "desc" ]],
            ajax: uAPIlocal+"/api/v1/dt/banklist",
            columns: [
                {title:"No"},
                {title:"Nama Bank"},
                {title:"No Rekening"},
                {title:"Nama Rekening"},
                {title:"Aksi"},
            ],
            columnDefs: [ {
                targets: -1,
                createdCell: (td, cellData, rowData, row, col) =>
                    ReactDOM.render(
                        <BrowserRouter>
                        {/* {console.log('cellData: '+cellData)}
                        {console.log('rowData: '+rowData)}
                        {console.log('row: '+row)}
                        {console.log('col: '+col)} */}
                        <button type="button"  className="btn btn-primary btn-sm" onClick={() => this.editBank(rowData[4])}> <FontAwesomeIcon icon={faEdit}/> Edit</button> <button type="button"  className="btn btn-danger btn-sm" onClick={() => this.deleteBank(rowData[4], rowData[1]+'-'+rowData[2]+' a.n '+rowData[3])}> <FontAwesomeIcon icon={faTrash}/> Delete</button>
                        </BrowserRouter>, td),
            } ]
        } );

        $('#memberlist').DataTable( {
            order: [[ 0, "desc" ]],
            ajax: uAPIlocal+"/api/v1/dt/memberlist",
            columns: [
                {title:"No"},
                {title:"Nama Lengkap"},
                {title:"Email"},
                {title:"No Hp"},
                {title:"Aksi"},
            ],
            columnDefs: [ {
                targets: -1,
                createdCell: (td, cellData, rowData, row, col) =>
                    ReactDOM.render(
                        <BrowserRouter>
                        {/* {console.log('cellData: '+cellData)}
                        {console.log('rowData: '+rowData)}
                        {console.log('row: '+row)}
                        {console.log('col: '+col)} */}
                        <button type="button"  className="btn btn-success btn-sm" onClick={() => this.detailMember(rowData[4])}> <FontAwesomeIcon icon={faEye}/> Detail</button>
                        </BrowserRouter>, td),
            } ]
        } );

        $('#messagelist').DataTable( {
            order: [[ 0, "desc" ]],
            ajax: uAPIlocal+"/api/v1/dt/messagelist",
            columns: [
                {title:"No"},
                {title:"Nama Lengkap"},
                {title:"Email"},
                {title:"Aksi"},
            ],
            columnDefs: [ {
                targets: -1,
                createdCell: (td, cellData, rowData, row, col) =>
                    ReactDOM.render(
                        <BrowserRouter>
                        {/* {console.log('cellData: '+cellData)}
                        {console.log('rowData: '+rowData)}
                        {console.log('row: '+row)}
                        {console.log('col: '+col)} */}
                        <button type="button"  className="btn btn-success btn-sm" onClick={() => this.detailMessage(rowData[4])}> <FontAwesomeIcon icon={faEye}/> Detail</button>
                        </BrowserRouter>, td),
            } ]
        } );
     
    }

    render() {
        if (this.state.redirect === '/admin/setting') { //redirect setelah delete bank
            return (
                <Route path='/admin/setting'>
                    <Datatables id='banklist'/>
                </Route>
            )
        } else if (this.state.redirect === '/admin/online-store') { //redirect setelah delete produk
            return (
                <Route path='/admin/online-store'>
                    <Datatables id='onlinestorelist'/>
                </Route>
            )
        } else if (this.state.redirect === '/admin/setting/edit-bank'){
            return (<Redirect to={this.state.url}/>)
        } else if (this.state.redirect === '/admin/member/detail'){
            return (<Redirect to={this.state.url}/>)
        } else if (this.state.redirect === '/admin/message/detail'){
            return (<Redirect to={this.state.url}/>)
        } else if (this.state.redirect === '/admin/online-store/edit-product'){
            return (<Redirect to={this.state.url}/>)
        }
        return (
            <DtTable id={this.props.id}/>
        )
    }

}

export default Datatables;
