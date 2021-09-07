import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { apiV2, uAPI } from '../config';
import { DtTable, Dt, ReloadDt, SwalConfirmDt } from './func';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: this.props.path,
            idTable: this.props.id,
            columns: this.props.columns,
            aksi: this.props.aksi !== undefined ? this.props.aksi : true,
            type: this.props.type !== undefined ? this.props.type : 'default',
            redirect: '',
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAksi = this.handleAksi.bind(this);
    }
    async handleDelete(id) {
        console.log('handleDelete', id);
    }
    async handleAksi(type, id) {
        console.log("handleAksi", type)
        console.log("handleAksi", id)
        if (type === 'edit') {
            await this.setState({
                redirect: `${this.state.path}/edit`,
                url: `${this.state.path}/edit/` + id
            })
        } else if (type === 'detail') {
            await this.setState({
                redirect: `${this.state.path}/detail`,
                url: `${this.state.path}/detail/` + id
            })
        } else if (type === 'delete') {
            await SwalConfirmDt(id, this.state.idTable, 'Delete Data', `Are you sure ?`, this.handleDelete, { title: 'Deleted!', html: 'Data has been deleted.' });
        }
    }
    async componentDidMount() {
        console.log(this.props)
        await Dt(this.state.idTable, `${uAPI + apiV2}dt/${this.state.idTable}`, this.state.columns, this.state.aksi, this.state.type, this.handleAksi);
    }
    render() {
        if (this.state.redirect !== '') {
            return (<Redirect to={this.state.url} />)
        }
        return (
            <>
                {/* <DtTable id={this.state.idTable} url={`${uAPI + apiV2}dt/${this.state.idTable}`} columns={this.state.columns} aksi={this.state.aksi} handleAksi={this.handleAksi}/> */}
                <DtTable id={this.state.idTable} />
            </>
        )
    }
}
export default Index;