import React, { useEffect, useState } from 'react';

//define our main app component here
const Signup = () => {
    //create an event handler to handle when the form is submitted
    function handleSubmit(event){
        event.preventDefault();
        //get the username and pass from the boxes
        const user = document.getElementById('username-input');
        const pass = document.getElementById('password-input');

        const body = {
            username: `${user.value}`,
            password: `${pass.value}`
        }        

        //clear the boxes
        user.value = "";
        pass.value = "";
        
        //make api call to send to 3000
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body),            
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    return (
    <div className="signup-page">
        <div className="signup-box">
            <form onSubmit = {handleSubmit}  className="signup-form">
                <h3 className="signup-text">Signup Below</h3>                
                <input type='text' id={'username-input'} className="signup-input"/>
                <input type='text' id={'password-input'} className="signup-input"/>
                <input type='submit' className="submit-button"/>
            </form>
        </div> 
    </div>
    )
}

export default Signup;