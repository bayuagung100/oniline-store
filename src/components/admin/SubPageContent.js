import React from 'react';
import './index.css';
import {
    Switch,
    Route,
    withRouter,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import AddBank from './page-content/setting/AddBank';
import AddProduct from './page-content/online-store/AddProduct';
import IdSubPageContent from './IdSubPageContent';

function SubPageContent() {
    let match = useRouteMatch();
    let { pageContent } = useParams();
    let { form } = useParams();
    
    if (pageContent === 'online-store') {
        if(form === 'add-product'){
            return <AddProduct/>;
        } else if(form === 'edit-product'){
            return (
                <Switch>
                    <Route path={`${match.path}/:formId`}>
                        <IdSubPageContent />
                    </Route>
                    <Route path={match.path}>
                        <h3>Not Found</h3>
                    </Route>
                </Switch>
            );
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'pesanan'){
        if(form === 'detail'){
            return (
                <Switch>
                    <Route path={`${match.path}/:formId`}>
                        <IdSubPageContent />
                    </Route>
                    <Route path={match.path}>
                        <h3>Not Found pesanan</h3>
                    </Route>
                </Switch>
            );
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'konfirmasi-pembayaran'){
        if(form === 'asd'){
            return <h3>asd</h3>;
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'message'){
        if(form === 'detail'){
            return (
                <Switch>
                    <Route path={`${match.path}/:formId`}>
                        <IdSubPageContent />
                    </Route>
                    <Route path={match.path}>
                        <h3>Not Found message</h3>
                    </Route>
                </Switch>
            );
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'member'){
        if(form === 'detail'){
            return (
                <Switch>
                    <Route path={`${match.path}/:formId`}>
                        <IdSubPageContent />
                    </Route>
                    <Route path={match.path}>
                        <h3>Not Found member</h3>
                    </Route>
                </Switch>
            );
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'setting'){
        if (form === 'add-bank') {
            return <AddBank/>;
        } else if(form === 'edit-bank'){
            return (
                <Switch>
                    <Route path={`${match.path}/:formId`}>
                        <IdSubPageContent />
                    </Route>
                    <Route path={match.path}>
                        <h3>Not Found</h3>
                    </Route>
                </Switch>
            );
        } else{
            return <h3>Not Found</h3>;
        }
   
        // return (
        //     <Switch>
        //         <Route path={`${match.path}/:formId`}>
        //             <IdSubPageContent />
        //         </Route>
        //         <Route path={match.path}>
        //             {
        //                 form === 'add-bank' ? (<AddBank/>) : (<h3>Not Found</h3>)
        //             }
        //         </Route>
        //     </Switch>
        // );
        // if (form === 'add-bank') {
        //     return <AddBank/>
        // } else if(form === 'edit-bank'){
        //     return <h3>Not Found</h3>;
        // } else{
        //     return <h3>Not Found</h3>;
        // }
    } else {
        return <h3>Not Found</h3>;
    }
}

export default withRouter(SubPageContent);