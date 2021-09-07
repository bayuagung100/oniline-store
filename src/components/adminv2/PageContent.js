import React from 'react';
import './index.css';
import {
    Switch,
    Route,
    withRouter,
    useRouteMatch,
    useParams
} from "react-router-dom";
import OnlineStore from './page-content/online-store/OnlineStore';
import Pesanan from './page-content/Pesanan';
import KonfirmasiPembayaran from './page-content/KonfirmasiPembayaran';
import Message from './page-content/message/Message';
import Member from './page-content/member/Member';
import Setting from './page-content/setting/Setting';
import SubPageContent from './SubPageContent';
import SettingUser from './page-content/setting/SettingUser';

function PageContent() {
    let match = useRouteMatch();
    let { pageContent } = useParams();
    if (pageContent === 'online-store') {
        return (
            <Switch>
                <Route path={`${match.path}/:form`}>
                    <SubPageContent />
                </Route>
                <Route path={match.path}>
                    <OnlineStore tbl='onlinestorelist' />
                </Route>
            </Switch>
        );
    } else if (pageContent === 'pesanan') {
        return (
            <Switch>
                <Route path={`${match.path}/:form`}>
                    <SubPageContent />
                </Route>
                <Route path={match.path}>
                    <Pesanan tbl='pesananlist' />
                </Route>
            </Switch>
        );
    } else if (pageContent === 'konfirmasi-pembayaran') {
        return <KonfirmasiPembayaran />
    } else if (pageContent === 'message') {
        return (
            <Switch>
                <Route path={`${match.path}/:form`}>
                    <SubPageContent />
                </Route>
                <Route path={match.path}>
                    <Message tbl='messagelist' />
                </Route>
            </Switch>
        );
    } else if (pageContent === 'member') {
        return (
            <Switch>
                <Route path={`${match.path}/:form`}>
                    <SubPageContent />
                </Route>
                <Route path={match.path}>
                    <Member tbl='memberlist' />
                </Route>
            </Switch>
        );
    } else if (pageContent === 'setting') {
        return (
            <Switch>
                <Route path={`${match.path}/:form`}>
                    <SubPageContent />
                </Route>
                <Route path={match.path}>
                    <Setting tbl='banklist' />
                </Route>
            </Switch>
        );
    } else if (pageContent === 'setting-user') {
        return (
            <Switch>
                <Route path={`${match.path}/:form`}>
                    <SubPageContent />
                </Route>
                <Route path={match.path}>
                    <SettingUser tbl='userlist' path={match.url} />
                </Route>
            </Switch>
        );
    } else {
        return <h3>Not Found</h3>;
    }
}

export default withRouter(PageContent);