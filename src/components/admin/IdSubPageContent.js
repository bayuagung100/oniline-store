import React from 'react';
import './index.css';
import {
    // useRouteMatch,
    useParams
  } from "react-router-dom";
import EditBank from './page-content/setting/EditBank';

function IdSubPageContent(state, props) {
    

    // let match = useRouteMatch();
    // let { pageContent } = useParams();
    let { form } = useParams();
    let { formId } = useParams();
    
    if (form === 'edit-bank'){
        return <EditBank id={formId}/>
        // return (
        //     <div>
        //       {/* <p>Anda menekan sebanyak {id} kali</p>
        //       <button onClick={() => setID(600)}>
        //         Klik saya
        //       </button> */}
        //     </div>
        //   );
    } else {
        return <h3>Not Found</h3>
    }
}

export default IdSubPageContent;