import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from './App';
import Admin from './components/admin/Index';
import Login from './components/admin/Login';
// import MenuSide from './components/lib/MenuSide';
// import MenuForm from './components/lib/MenuForm';

import Nested from './Nestedrouting';


function Router() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={App} />
                <Route path="/admin" component={Admin} />
                <Route path="/auth" component={Login} />
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

            </div>
        </BrowserRouter>
    );
}

export default Router ;