import React from 'react';
import './Librarian.css'

const Librarian = (props) => {
   return (
       <div className="librarain-container">
        <h2>Librarian Member Login </h2>
        <form>
          <label for="uname"><b>Username</b></label>
          <input type="text"></input>

          <label for="psw"><b>Password</b></label>
          <input type="password"></input>

          <button type="submit">Login</button>
        </form>   


       </div>
   )
}


export default Librarian;