import React, { Component } from "react";
import "./datatables.min.css";

const $ = require('jquery');
$.Datatable = require('datatables.net-bs4');

class Datatables extends Component {
    componentDidMount() {
        // console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                // columns: [
                //     {title:"Name"},
                //     {title:"Position"},
                //     {title:"Office"},
                //     {title:"Extn."},
                //     {title:"Start date"},
                //     {title:"Salary"},
                // ],
                columns: this.props.columns
            }
        )
    }

    render() {
        return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered" width="100%" ref={el => this.el = el} >

            </table>
        </div>
        )
    }

}

export default Datatables;
