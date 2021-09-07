import React from 'react';
import { Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCartArrowDown, faShoppingCart, faClipboardList, faComment, faUsers, faCog, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
// import Admin from '../admin/Index';
import Adminv2 from '../adminv2/Index';
// import Dashboard from '../admin/page-content/Dashboard';
// import Pesanan from '../admin/page-content/Pesanan';


const MenuSide = [
    {
        title: "Dashboard",
        fa: <FontAwesomeIcon icon={faTachometerAlt} style={{ marginRight: "6px" }} />,
        route: <Route path="/admin" component={Adminv2} />,
        url: "",
        active: ["/admin"],

    },
    {
        title: "Online Store",
        fa: <FontAwesomeIcon icon={faCartArrowDown} style={{ marginRight: "6px" }} />,
        route: <Route path="/admin/online-store" component={Adminv2} />,
        url: "/online-store",
        active: ["/admin/online-store"],
        // ch: [
        //     {
        //         title: "Daftar Product",
        //         fa: <FontAwesomeIcon icon={faCircleNotch} className="nav-icon"/>,
        //         route: <Route path="/admin/online-store" component={Admin} />,
        //         url: "/admin/daftar-product",
        //     }
        // ]
    },
    {
        title: "Pesanan",
        fa: <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "6px" }} />,
        route: <Route path="/admin/pesanan" component={Adminv2} />,
        url: "/pesanan",
        active: ["/admin/pesanan"],
    },
    {
        title: "Konfirmasi Pembayaran",
        fa: <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: "6px" }} />,
        route: <Route path="/admin/konfirmasi-pembayaran" component={Adminv2} />,
        url: "/konfirmasi-pembayaran",
        active: ["/admin/konfirmasi-pembayaran"],
    },
    {
        title: "Message",
        fa: <FontAwesomeIcon icon={faComment} style={{ marginRight: "6px" }} />,
        route: <Route path="/admin/message" component={Adminv2} />,
        url: "/message",
        active: ["/admin/message"],
    },
    {
        title: "Member",
        fa: <FontAwesomeIcon icon={faUsers} style={{ marginRight: "6px" }} />,
        route: <Route path="/admin/member" component={Adminv2} />,
        url: "/member",
        active: ["/admin/member"],
    },
    {
        title: "Setting",
        fa: <FontAwesomeIcon icon={faCog} style={{ marginRight: "6px" }} />,
        route: <Route path="/admin/setting" component={Adminv2} />,
        url: "/setting",
        active: ["/admin/setting", "/admin/setting-user"],
        // restricted: true, //0=Administrator, 1=Owner
        child: [
            {
                title: "Setting Infoweb",
                fa: <FontAwesomeIcon icon={faCircleNotch} style={{ marginRight: "6px" }} />,
                url: "/setting",
                active: "/admin/setting",
            },
            {
                title: "Setting User Admin",
                fa: <FontAwesomeIcon icon={faCircleNotch} style={{ marginRight: "6px" }} />,
                route: <Route path="/admin/setting-user" component={Adminv2} />,
                url: "/setting-user",
                active: "/admin/setting-user",
                restricted: true, //0=Administrator, 1=Owner

            },
        ]
    },

];

export default MenuSide;
