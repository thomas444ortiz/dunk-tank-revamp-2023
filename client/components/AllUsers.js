import React, { useEffect, useState } from 'react';

//define our main app component here
const AllUsers = () => {
    const [users, setUsers] = useState([]);


    useEffect(()=>{
        //fetch the user data
        fetch('/signup', {
            method: "GET",          
        })
        .then((response) => response.json())
        .then((data) => setUsers([...data]))
        .catch((err) => console.log(err))
    }, userInfo)
 
    const userInfo = users.map((user) => <div key={user._id}>username: {user.username}, password: {user.password}, id: {user._id}</div>)

    return (
    <div className="allusers-component">
        <h2>Admin Information: All Users</h2>
        <div className="allusers-display" >
            {userInfo}
        </div>        
    </div>
    )
}

export default AllUsers;