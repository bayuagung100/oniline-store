import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


function BtnBack() {
    let history = useHistory();
    return (
        <button className="btn btn-warning" onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft}/> Batal
        </button>
    );
}

class AddBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.addBankSubmit = this.addBankSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.props)
    }
    addBankSubmit(e){
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <section className="content" style={{paddingTop:"20px"}}>
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Tambah Rekening Bank</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={e => this.addBankSubmit(e)} className="form-horizontal" style={{padding:"10px"}}>
                                    <div className="form-group">
                                        <label>Nama Bank</label>
                                        <input type="text" className="form-control" name="nama_bank" value='' placeholder="Enter nama bank"/>
                                    </div>
                                    <div className="form-group">
                                        <label>No Rekening</label>
                                        <input type="tel" className="form-control" name="no_rekening" value='' placeholder="Enter no.rekening"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nama Rekening</label>
                                        <input type="text" className="form-control" name="nama_rekening" value='' placeholder="Enter nama rekening"/>
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
            </div>
        );
    }
}

export default AddBank;