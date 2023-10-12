import React from 'react'
import './Color.css'
const Header = () => {
  return (
  <center>
  <div id="demo">
   <form>
    <fieldset>

    <legend>registration form</legend>
    <p>Name</p>
    <input type="text" placeholder="Enter your name"></input>
    <p>phone number</p>
    <input type="number" palceholder="Enter your phone number"></input>
    <p>Gender</p>
    <p><input type="radio" ></input>Male</p>
    <p><input type="radio"></input>Female</p>
    <p>age:</p>
    <input type="range"></input><br></br>
    <button>submit</button>
    
   </fieldset>
   </form>
   </div>
   </center>
  )
}
export default Header