import React  from "react";
import { Route, Routes } from "react-router-dom";
import {
    Hatspage, 
    Homepage, 
    Shoppage,
    SignInAndSignUp
} from "./pages/index";

const RoutesApp = () => (
    <div>
        <Routes>
            <Route exact path='/' element= {<Homepage />}/>
            <Route  path='/hats' element= {<Hatspage/>}/>
            <Route  path='/shop' element= {<Shoppage/>}/>
            <Route  path='/signin' element= {<SignInAndSignUp/>}/>
        </Routes>
    </div>
    
)
export default RoutesApp;
