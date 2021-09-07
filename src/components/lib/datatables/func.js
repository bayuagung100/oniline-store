import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

const $ = require('jquery');
$.Datatable = require('datatables.net-bs4');


function DtDefault(props) { //type=default
    return (
        <>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => props.handleAksi('edit', props.id)} > <FontAwesomeIcon icon={faEdit} /> Edit</button> <button type="button" className="btn btn-danger btn-sm" onClick={() => props.handleAksi('delete', props.id)} > <FontAwesomeIcon icon={faTrash} /> Delete</button>
        </>
    )
}
function DtDetail(props) { //type=detail
    return (
        <>
            <button type="button" className="btn btn-success btn-sm" onClick={() => props.handleAksi('detail', props.id)} > <FontAwesomeIcon icon={faEye} /> Detail</button>
        </>
    )
}
function DtDetailDelete(props) { //type=detail-delete
    return (
        <>
            <button type="button" className="btn btn-success btn-sm" onClick={() => props.handleAksi('detail', props.id)} > <FontAwesomeIcon icon={faEye} /> Detail</button> <button type="button" className="btn btn-danger btn-sm" onClick={() => props.handleAksi('delete', props.id)} > <FontAwesomeIcon icon={faTrash} /> Delete</button>
        </>
    )
}
export async function ReloadDt(id) {
    console.log('reload dt')
    return $(`#${id}`).DataTable().ajax.reload();
}
export async function Dt(id, url, columns = [], aksi = true, type, handleAksi) {
    let newColumns = [
        { title: "No" },
    ]
    if (columns.length > 0) await columns.forEach(el => {
        newColumns.push({ title: el })
    });
    let columnDefs
    if (aksi) {
        await newColumns.push({ title: "Aksi" })
        if (type === 'default') {
            columnDefs = [{
                targets: -1,
                createdCell: (td, cellData, rowData, row, col) =>
                    ReactDOM.render(
                        <BrowserRouter>
                            {/* {console.log('cellData: ' + cellData)}
                            {console.log('rowData: ' + rowData)}
                            {console.log('row: ' + row)}
                            {console.log('col: ' + col)} */}
                            {<DtDefault id={rowData.slice(-1)[0]} handleAksi={handleAksi} />}
                        </BrowserRouter>, td),
            }]
        } else if (type === 'detail') {
            columnDefs = [{
                targets: -1,
                createdCell: (td, cellData, rowData, row, col) =>
                    ReactDOM.render(
                        <BrowserRouter>
                            {/* {console.log('cellData: ' + cellData)}
                            {console.log('rowData: ' + rowData)}
                            {console.log('row: ' + row)}
                            {console.log('col: ' + col)} */}
                            {<DtDetail id={rowData.slice(-1)[0]} handleAksi={handleAksi} />}
                        </BrowserRouter>, td),
            }]
        } else if (type === 'detail-delete') {
            columnDefs = [{
                targets: -1,
                createdCell: (td, cellData, rowData, row, col) =>
                    ReactDOM.render(
                        <BrowserRouter>
                            {/* {console.log('cellData: ' + cellData)}
                            {console.log('rowData: ' + rowData)}
                            {console.log('row: ' + row)}
                            {console.log('col: ' + col)} */}
                            {<DtDetailDelete id={rowData.slice(-1)[0]} handleAksi={handleAksi} />}
                        </BrowserRouter>, td),
            }]
        }
    }
    return await $(`#${id}`).DataTable({
        order: [[0, "desc"]],
        processing: true,
        ajax: url,
        columns: newColumns,
        columnDefs: columnDefs,
    });
}

export function DtTable(props) {
    const id = props.id;
    return (
        <div className="table-responsive">
            <table id={id} className="table table-striped table-bordered" width="100%" >
            </table>
        </div>
    )
}

export function SwalConfirmDt(id, idTable, title, text, handleFetch, callback = { title: '', html: '' }) {
    Swal.fire({
        icon: 'warning',
        title: title,
        html: text,
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        preConfirm: () => {
            return handleFetch(id);
        },

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: callback.title,
                html: callback.html,
            }).then(() => {
                ReloadDt(idTable);
            })
        }
    })

}
