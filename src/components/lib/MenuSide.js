import React from 'react';
import {Route} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCartArrowDown, faShoppingCart, faClipboardList, faComment, faUsers, faCog} from '@fortawesome/free-solid-svg-icons';
import Admin from '../admin/Index';
import Pesanan from '../admin/page-content/Pesanan';


const MenuSide= [
    {
        title: "Dashboard",
        fa:  <FontAwesomeIcon icon={faTachometerAlt} style={{ marginRight:"6px"}}/> ,
        route: <Route path="/admin" component={Admin} />,
        url: "/admin"
    },
    {
        title: "Online Store",
        fa: <FontAwesomeIcon icon={faCartArrowDown} style={{ marginRight:"6px"}}/> ,
        route: <Route path="/admin/online-store" component={Admin} />,
        url: "/admin/online-store",
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
        fa: <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight:"6px"}}/> ,
        route: <Route path="/admin/pesanan" component={Pesanan} />,
        url: "/admin/pesanan"
    },
    {
        title: "Konfirmasi Pembayaran",
        fa: <FontAwesomeIcon icon={faClipboardList} style={{ marginRight:"6px"}}/> ,
        route: <Route path="/admin/konfirmasi-pembayaran" component={Admin} />,
        url: "/admin/konfirmasi-pembayaran"
    },
    {
        title: "Message",
        fa: <FontAwesomeIcon icon={faComment} style={{ marginRight:"6px"}}/> ,
        route: <Route path="/admin/message" component={Admin} />,
        url: "/admin/message"
    },
    {
        title: "Member",
        fa: <FontAwesomeIcon icon={faUsers} style={{ marginRight:"6px"}}/> ,
        route: <Route path="/admin/member" component={Admin} />,
        url: "/admin/member"
    },
    {
        title: "Setting",
        fa: <FontAwesomeIcon icon={faCog} style={{ marginRight:"6px"}}/> ,
        route: <Route path="/admin/setting" component={Admin} />,
        url: "/admin/setting"
    },
];

export default MenuSide;
