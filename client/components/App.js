import React, { Component } from 'react';
import Signup from './Signup'
import Header from './Header'
//define our main app component here
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Signup />                
            </div>
        )
    }
}

export default App; //export the app so it can be imported in index.js