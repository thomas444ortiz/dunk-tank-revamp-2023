import React, { Component } from 'react';
import Signup from './Signup'
import Header from './Header'
import AllUsers from './AllUsers'
import Feed from './Feed'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//define our main app component here
class App extends Component {
    render() {
        return (
            // <div>
            //     <Header />
            //     <Signup />   
            //     <Login />  
            //     <AllUsers />           
            // </div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Feed />}/> {/* Default content for root */}
                <Route path="join" element={<Signup />}/>
                <Route path="loginuser" element={<Login />}/>
                <Route path="admin" element={<AllUsers />}/>
            </Routes>
        </BrowserRouter>
        )
    }
}

export default App; //export the app so it can be imported in index.js