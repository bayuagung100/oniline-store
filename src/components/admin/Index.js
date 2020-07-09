import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import MenuSide from '../lib/MenuSide';
import Dashboard from './page-content/Dashboard';
import OnlineStore from './page-content/OnlineStore';
import Pesanan from './page-content/Pesanan';
import KonfirmasiPembayaran from './page-content/KonfirmasiPembayaran';
import Message from './page-content/Message';
import Member from './page-content/Member';
import Setting from './page-content/Setting';

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
        localStorage.removeItem("token");
        this.setState({
            login: false
        })
    }

    active(){

        this.setState((state, props) => {
            return {
                path: this.props.history.location.pathname,
            };
        },()=>console.log(this.state.path));
    }

    componentDidMount(){
        console.log(this.state.path);
    }

    render() {
        if (this.state.login === false) {
            return (<Redirect to="/auth" />)
        }
        
        return (
            // <BrowserRouter>
            //     <div>
            //         admin
            //         <button onClick={this.logout}> logout </button>
            //     </div>
            // </BrowserRouter>
            <div className="hold-transition sidebar-mini layout-fixed">
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
                        <Link className="brand-link" to="/admin">
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
                                                    <Link to={value.url} onClick={this.active} className="nav-link">
                                                        {value.fa}
                                                        <p>
                                                            {value.title}
                                                        </p>
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                    {/* <li className="nav-item">
                                        <Link to="#" className="nav-link">
                                            <FontAwesomeIcon icon={faTachometerAlt} style={{ marginRight:"6px"}}/>
                                            <p>
                                                Dashboard
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <Link to="#" className="nav-link">
                                            <FontAwesomeIcon icon={faCartArrowDown} style={{ marginRight:"6px"}}/>
                                            <p>
                                                Online Store
                                                <FontAwesomeIcon icon={faAngleDown} className="right"/>
                                            </p>
                                        </Link>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/layout/top-nav.html" className="nav-link">
                                                <FontAwesomeIcon icon={faCircleNotch} className="nav-icon"/>
                                                <p>Daftar Product</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/layout/top-nav.html" className="nav-link">
                                                <FontAwesomeIcon icon={faCircleNotch} className="nav-icon"/>
                                                <p>Daftar Product</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link">
                                            <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight:"6px"}}/>
                                            <p>
                                                Pesanan
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link">
                                            <FontAwesomeIcon icon={faClipboardList} style={{ marginRight:"6px"}}/>
                                            <p>
                                                Konfirmasi Pembayaran
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link">
                                            <FontAwesomeIcon icon={faComment} style={{ marginRight:"6px"}}/>
                                            <p>
                                                Message
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link">
                                            <FontAwesomeIcon icon={faUsers} style={{ marginRight:"6px"}}/>
                                            <p>
                                                Member
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link">
                                            <FontAwesomeIcon icon={faCog} style={{ marginRight:"6px"}}/>
                                            <p>
                                                Setting
                                            </p>
                                        </Link>
                                    </li> */}
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
                        {
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
                                                    <Setting/>
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
                        }
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

export default Index;