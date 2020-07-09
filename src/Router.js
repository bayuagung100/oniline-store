import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from './App';
import Admin from './components/admin/Index';
import Login from './components/admin/Login';
import MenuSide from './components/lib/MenuSide';


function Router() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={App} />
                <Route path="/admin" component={Admin} />
                <Route path="/auth" component={Login} />

                {
                    MenuSide.map((value, index) => {
                        return(
                            <div key={index}>
                                {value.route}   
                            </div>                         
                        );
                    })
                }
                
            </div>
        </BrowserRouter>
    );
}

export default Router ;