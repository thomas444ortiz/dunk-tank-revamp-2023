import React, { useEffect, useState } from 'react';
//define our main app component here
const Login = () => {
    //create an event handler to handle when the form is submitted
    function handleSubmit(event){
        event.preventDefault();

        //get the username and pass from the boxes
        const user = document.getElementById('login-username-input');
        const pass = document.getElementById('login-password-input');

        const body = {
            username: `${user.value}`,
            password: `${pass.value}`
        }        

        //clear the boxes
        user.value = "";
        pass.value = "";

       //make api call to send to 3000
       fetch('/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body),            
        })
        .then((response) => response.json())
        .then((data) => {
            const login = document.getElementById('logged-in')            
            if(!data.hasOwnProperty('err')){
                login.style.color = 'green';
                login.innerHTML = `You are logged in as ${data.username}`;                
            }
            else {
                login.innerHTML = `Login unsuccessful, try again`; 
            }
        })
        .catch((err) => console.log(err))
    }

    return (
    <div className="signup-page">
        <div className="signup-box">
            <form onSubmit = {handleSubmit}  className="signup-form">
                <h3 className="signup-text">Login Below</h3>                
                <input type='text' id={'login-username-input'} className="signup-input"/>
                <input type='text' id={'login-password-input'} className="signup-input"/>
                <input type='submit' className="submit-button"/>
            </form>
            <div id="logged-in">You are not logged in</div>
        </div> 
    </div>
    )
}

export default Login;