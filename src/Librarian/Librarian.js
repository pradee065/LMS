import React from 'react';
import './Librarian.css';
import axios from 'axios';

const Librarian = (props) => {
   return (
       <div className="librarain-container">
        <h2>Librarian Member Login </h2>
        <form onSubmit ={(e) => login(e)}>
          <label for="uname"><b>Username</b></label>
          <input type="text" id="user-input"></input>

          <label for="psw"><b>Password</b></label>
          <input type="password" id="user-password"></input>

          <button type="submit">Login</button>
        </form>   


       </div>
   )
}

function login(e){
    e.preventDefault();
    let request = {
        email: document.getElementById('user-input').value,
        password: document.getElementById('user-password').value
    }
    axios.post('http://localhost:3000/login', request)
    .then( resp => {
        alert(resp.data.message);
    })
    .catch( err => {
        console.log(err);
    })
}


export default Librarian;