import React, { Component } from "react";

class KonfirmasiPembayaran extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         path: props.location.path
    //     }
    // }
    render() {
        // console.log(this.state.path)
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Konfirmasi Pembayaran</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Daftar Data Konfirmasi Pembayaran</h3>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default KonfirmasiPembayaran;