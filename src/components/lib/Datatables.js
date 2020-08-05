import React, { Component } from "react";
import "./datatables.min.css";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import axios from "axios";


const $ = require('jquery');
$.Datatable = require('datatables.net-bs4');


class DtTable extends React.Component {
    render() {
        const id = this.props.id;
        return (
        <div className="table-responsive">
            <table id={id} className="table table-striped table-bordered" width="100%" >
                <thead>
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
                </tfoot>
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
        this.editBank = this.editBank.bind(this);
        this.deleteBank = this.deleteBank.bind(this);
    }

    editBank(id){
        this.setState({ 
            redirect: '/admin/setting/edit-bank',
            url: '/admin/setting/edit-bank/'+id
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
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                axios.delete('http://localhost:8080/api/v1/banklist/'+id)
                .then(
                    () =>  Swal.fire({
                        title: 'Success!',
                        text: 'Success delete!',
                        icon: 'success',
                        allowOutsideClick: false,
                    }).then(() => this.setState({ redirect: '/admin/setting' }))
                )
                .catch(function (error) {
                    console.log(error);
                });
                
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

        $('#banklist').DataTable( {
            order: [[ 0, "desc" ]],
            ajax: "http://localhost:8080/api/v1/dt/banklist",
            columnDefs: [ {
                targets: -1,
                // "data": null,
                // "defaultContent": '<div id="edit"></div>',
                
                // "defaultContent": '<a href="/admin/setting/edit-bank/" class="btn btn-primary btn-sm"><i class="fas fa-pencil-alt"></i> Edit</a> <a href="/admin/setting/delete-bank/" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i> Hapus</a>',
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
     
    }

    render() {
        if (this.state.redirect === '/admin/setting') {
            return (
                <Route path='/admin/setting'>
                    <Datatables id='banklist'/>
                </Route>
            )
        } else if (this.state.redirect === '/admin/setting/edit-bank'){
            return (<Redirect to={this.state.url}/>)
        }
        return (
            <DtTable id={this.props.id}/>
        )
    }

}

export default Datatables;
