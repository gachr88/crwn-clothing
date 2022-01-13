import React  from "react";
import { Route, Routes } from "react-router-dom";
import {Hatspage, Homepage} from "./pages/index";

const RoutesApp = () => (
    <div>
        <Routes>
            <Route exact path='/' element= {<Homepage />}/>
            <Route exact path='/hats' element= {<Hatspage/>}/>
        </Routes>
    </div>
    
)
export default RoutesApp;
