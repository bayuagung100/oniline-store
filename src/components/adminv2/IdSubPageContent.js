import React from 'react';
import './index.css';
import {
    // useRouteMatch,
    useParams
  } from "react-router-dom";

import EditProduk from './page-content/online-store/EditProduct';
import EditBank from './page-content/setting/EditBank';
import DetailMember from './page-content/member/DetailMember';
import DetailMessage from './page-content/message/DetailMessage';

function IdSubPageContent(state, props) {
    
    let { pageContent } = useParams();
    let { form } = useParams();
    let { formId } = useParams();
    
    if (pageContent === 'online-store' && form === 'edit-product'){
        return <EditProduk id={formId}/>
    } else if (pageContent === 'setting' && form === 'edit-bank'){
        return <EditBank id={formId}/>
    } else if (pageContent === 'member' && form === 'detail'){
        return <DetailMember id={formId}/>
    } else if (pageContent === 'pesanan' && form === 'detail'){
        return <h3>pesanan detail</h3>
    } else if (pageContent === 'message' && form === 'detail'){
        return <DetailMessage id={formId}/>
    }
    else {
        return <h3>Not Found</h3>
    }
}

export default IdSubPageContent;