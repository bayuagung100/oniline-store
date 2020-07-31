import React from 'react';
import {Route} from "react-router-dom";
import AddBank from '../admin/page-content/setting/AddBank';
import Admin from '../admin/Index';


const MenuForm= [
    {
        route: <Route path="/admin/setting/add-bank" component={AddBank} />,
    },
    
];

export default MenuForm;
