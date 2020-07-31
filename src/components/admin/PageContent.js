import React from 'react';
import './index.css';
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import OnlineStore from './page-content/OnlineStore';
import Pesanan from './page-content/Pesanan';
import KonfirmasiPembayaran from './page-content/KonfirmasiPembayaran';
import Message from './page-content/Message';
import Member from './page-content/Member';
import Setting from './page-content/setting/Setting';
import SubPageContent from './SubPageContent';

function PageContent() {
    let match = useRouteMatch();
    let { pageContent } = useParams();
    if (pageContent === 'online-store') {
        return <OnlineStore/>
    } else if(pageContent === 'pesanan'){
        return <Pesanan/>
    } else if(pageContent === 'konfirmasi-pembayaran'){
        return <KonfirmasiPembayaran/>
    } else if(pageContent === 'message'){
        return <Message/>
    } else if(pageContent === 'member'){
        return (
            <Switch>
                <Route path={`${match.path}/:formId`}>
                    <SubPageContent />
                </Route>
                <Route path={match.path}>
                    <Member/>
                </Route>
            </Switch>
        );
    } else if(pageContent === 'setting'){
        return (
            <Switch>
                <Route path={`${match.path}/:formId`}>
                    <SubPageContent />
                </Route>
                <Route path={match.path}>
                    <Setting/>
                </Route>
            </Switch>
        );
    } else {
        return <h3>Not Found</h3>;
    }
}

export default PageContent;