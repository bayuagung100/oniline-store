import React, { Component } from 'react';
import './index.css';
// import { Switch, Route, Redirect, Link, useRouteMatch, useParams } from "react-router-dom";
import {
    Switch,
    Route,
    Redirect,
    Link,
    withRouter
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import MenuSide from '../lib/MenuSide';
import Dashboard from './page-content/Dashboard';
import PageContent from './PageContent';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

class Index extends Component {
    constructor(props) {
        super(props);
        let token = localStorage.getItem('token');
        let login = true;
        if (token == null) {
            login = false
        }
        this.state = {
            login,
            path: this.props.history.location.pathname,

        }

        this.logout = this.logout.bind(this);
        this.active = this.active.bind(this);

    }

    logout(){
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                // axios.put('http://localhost:8080/api/v1/banklist',{
                //     id: this.state.dataBank.id,
                //     bank_name: this.state.dataBank.bank_name,
                //     bank_rekening: this.state.dataBank.bank_rekening,
                //     bank_name_rekening: this.state.dataBank.bank_name_rekening,
                // })
                // .then(
                //     () => Swal.fire({
                //         title: 'Success!',
                //         text: 'Success edit rekening bank',
                //         icon: 'success',
                //         allowOutsideClick: false,
                //     }).then(() => this.setState({ redirect: true }))
                // )
                // .catch(function (error) {
                //     console.log(error);
                // });
                localStorage.removeItem("token");
                this.setState({
                    login: false
                })
                    }
                })
        // localStorage.removeItem("token");
        // this.setState({
        //     login: false
        // })
    }

    active(){
        this.setState((state, props) => {
            return {
                path: this.props.history.location.pathname,
            };
        })
    }


    

    componentDidMount(){
    }

    render() {
        if (this.state.login === false) {
            return (<Redirect to="/auth" />)
        }
        const match = this.props.match.path;
        return (
            <div className="sidebar-mini layout-fixed layout-navbar-fixed">
                <div className="wrapper">
                    {/* Navbar */}
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="#" className="nav-link" data-widget="pushmenu" ><FontAwesomeIcon icon={faBars}/></Link>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <Link to="#" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <Link to="#" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="#" className="nav-link" onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>
                            </li>
                        </ul>
                    </nav>


                    {/* Main Sidebar Container */}
                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                        <Link className="brand-link" to="/admin" onClick={this.active}>
                            <span className="brand-text font-weight-light">Administrator</span>
                        </Link>

                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar Menu */}
                            <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    {
                                        MenuSide.map((value, index) => {
                                            return(
                                                <li key={index} className="nav-item">
                                                    <Link to={`${this.props.match.path}`+value.url} onClick={this.active} className={"nav-link "+(this.state.path===value.active ? 'active':'')}>
                                                        {value.fa}
                                                        <p>
                                                            {value.title}
                                                        </p>
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                    
                                </ul>
                            </nav>
                        </div>
                    </aside>


                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        {/* <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Dashboard</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                    </ol>
                                </div>
                                </div>
                            </div>
                        </div> */}

                        {/* Main content */}
                        {/* <section className="content">
                            <div className="container-fluid">
                                isi main content
                            </div>
                        </section> */}
                        {/* {
                            this.state.path === "/admin" ? (
                                <Dashboard/>
                            ) : (
                                this.state.path === "/admin/online-store" ? (
                                <OnlineStore/>
                                ) : (
                                    this.state.path === "/admin/pesanan" ? (
                                    <Pesanan/>
                                    ) : (
                                        this.state.path === "/admin/konfirmasi-pembayaran" ? (
                                        <KonfirmasiPembayaran/>
                                        ) : (
                                            this.state.path === "/admin/message" ? (
                                            <Message/>
                                            ) : (
                                                this.state.path === "/admin/member" ? (
                                                <Member/>
                                                ) : (
                                                    this.state.path === "/admin/setting" ? (
                                                    // <Setting/>
                                                    <Route path="/admin/setting" component={Setting} />
                                                    ) : (
                                                        
                                                            <div>
                                                                page not found
                                                            </div>
                                                        
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        } */}

                        {/* { this.state.path  === "/admin" && <Dashboard /> }
                        { this.state.path  === "/admin/online-store" && <OnlineStore /> }
                        { this.state.path  === "/admin/pesanan" && <Pesanan /> }
                        { this.state.path  === "/admin/konfirmasi-pembayaran" && <KonfirmasiPembayaran /> }
                        { this.state.path  === "/admin/message" && <Message /> }
                        { this.state.path  === "/admin/member" && <Member /> }
                        { this.state.path  === "/admin/setting" && <Setting /> } */}
                        {/* { this.state.path  === "/admin/setting/add-bank" && <AddBank /> } */}

                        {/* {
                            this.state.path === "/admin" ? (
                                <Dashboard/>
                            ) : (
                                this.state.path === "/admin/online-store" ? (
                                <OnlineStore/>
                                ) : (
                                    this.state.path === "/admin/pesanan" ? (
                                    <Pesanan/>
                                    ) : (
                                        this.state.path === "/admin/konfirmasi-pembayaran" ? (
                                        <KonfirmasiPembayaran/>
                                        ) : (
                                            this.state.path === "/admin/message" ? (
                                            <Message/>
                                            ) : (
                                                this.state.path === "/admin/member" ? (
                                                <Member/>
                                                ) : (
                                                    this.state.path === "/admin/setting" ? (
                                                    // <Setting/>
                                                    <Route path="/admin/setting" component={Setting} />
                                                    ) : (
                                                        
                                                            <div>
                                                                page not found
                                                            </div>
                                                        
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        } */}

                        
                        
                        
                        {/* {
                            this.state.path === "/admin/setting" ? (
                                <Setting/>
                            ) : (
                                <div>
                                    <Route path="/admin" component={Dashboard} />
                                    <Route path="/admin/online-store" component={OnlineStore} />
                                    <Route path="/admin/pesanan" component={Pesanan} />
                                    <Route path="/admin/konfirmasi-pembayaran" component={KonfirmasiPembayaran} />
                                    <Route path="/admin/message" component={Message} />
                                    <Route path="/admin/member" component={Member} />
                                    
                                    
                                </div>
                            )
                        } */}

                        <Switch>
                            <Route path={`${match}/:pageContent`}>
                                <PageContent/>
                            </Route>
                            <Route path={match}>
                                <Dashboard/>
                            </Route>
                        </Switch>

                    </div>

                    {/* Content footer */}
                    <footer className="main-footer">
                        <strong>Copyright &copy; 2020 <a href="http://adminlte.io">Admin Online Store</a>.</strong>
                        All rights reserved.
                        <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 1.0
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default withRouter(Index);

