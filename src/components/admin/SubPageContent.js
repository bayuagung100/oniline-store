import React from 'react';
import './index.css';
import {
    // useRouteMatch,
    useParams
  } from "react-router-dom";
import AddBank from './page-content/setting/AddBank';

function SubPageContent() {
    // let match = useRouteMatch();
    let { pageContent } = useParams();
    let { formId } = useParams();
    
    if (pageContent === 'online-store') {
        if(formId === 'asd'){
            return <h3>asd</h3>;
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'pesanan'){
        if(formId === 'asd'){
            return <h3>asd</h3>;
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'konfirmasi-pembayaran'){
        if(formId === 'asd'){
            return <h3>asd</h3>;
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'message'){
        if(formId === 'asd'){
            return <h3>asd</h3>;
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'member'){
        if(formId === 'asd'){
            return <h3>asd</h3>;
        } else {
            return <h3>Not Found</h3>;
        }
    } else if(pageContent === 'setting'){
        if (formId === 'add-bank') {
            return <AddBank/>
        } else if(formId === 'edit-bank'){
            return <h3>edit-bank</h3>;
        } else{
            return <h3>Not Found</h3>;
        }
    } else {
        return <h3>Not Found</h3>;
    }
}

export default SubPageContent;