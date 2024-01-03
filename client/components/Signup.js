import React, { useEffect, useState } from 'react';
//define our main app component here
const Signup = () => {
    //create a state to store the values in the boxes
    const [username, setUsername] = useState(''); //initialize the username as an empty string
    const [password, setPassword] = useState(''); //initialize the username as an empty string
    
    //create an event handler to handle when the form is submitted
    function handleSubmit(event){
        event.preventDefault();
        //get the username and pass from the boxes
        const user = document.getElementById('username-input');
        const pass = document.getElementById('password-input');
        //update the state
        setUsername(user.value);
        setPassword(pass.value);
        //clear the boxes
        user.value = "";
        pass.value = "";

        //make api call to send to 3000



    }

    return (
    <div>
        <div>Signup Below</div>
        <form onSubmit = {handleSubmit}>
            <input type='text' id={'username-input'}/>
            <input type='text' id={'password-input'}/>
            <input type='submit'/>
        </form>
    </div> 
    )
}

export default Signup;