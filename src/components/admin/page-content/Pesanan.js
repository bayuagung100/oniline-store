import React, { Component } from "react";
import Tbl from "../../lib/Datatables";

class Pesanan extends Component {
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
        {title:"ID Pesanan"},
        {title:"Tanggal"},
        {title:"Nama"},
        {title:"Email"},
        {title:"No Hp"},
        {title:"Status"},
        {title:"Aksi"},
    ];

    render() {
        // console.log(this.state.path)
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Pesanan</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Daftar Data Pesanan</h3>
                            </div>
                            <div className="card-body">
                                <Tbl data={this.dataSet} columns={this.dataColums}></Tbl>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Pesanan;