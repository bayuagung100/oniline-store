import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
// import App from './App';
import Store from './components/store/Index';
// import Admin from './components/admin/Index';
import Adminv2 from './components/adminv2/Index';
// import Login from './components/admin/Login';
import Loginv2 from './components/adminv2/Login';
// import MenuSide from './components/lib/MenuSide';
// import MenuForm from './components/lib/MenuForm';

import Nested from './Nestedrouting';


function Router() {
    return (
        <BrowserRouter>
            {/* <div> */}
                <Route path="/" exact component={Store} />
                <Route path="/admin" component={Adminv2} />
                <Route path="/auth" component={Loginv2} />
                {/* <Route path="/admin/setting/add-bank" component={Admin} /> */}
                {/* {
                    MenuSide.map((value, index) => {
                        return(
                            <div key={index}>
                                {value.route}   
                            </div>                         
                        );
                    })
                } */}

                {/* {
                    MenuForm.map((value, index) => {
                        return(
                            <div key={index}>
                                {value.route}   
                            </div>                         
                        );
                    })
                } */}

                <Route path="/nested" component={Nested} />

            {/* </div> */}
        </BrowserRouter>
    );
}

export default Router ;