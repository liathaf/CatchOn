import React from 'react'
import { Link } from 'react-router-dom'

export function SignUpForm() {
    return (  
        <form>
          <h1>Sign Up</h1>

            <input type="text" placeholder="Full Name" />         
            <input type="text" placeholder="Email" />         
            <input type="password" placeholder="Password" />         
            <input type="password" placeholder=" Repeat Password" />  
            <div className="">
             <p>I have read and agreed with the <a href="#">terms and conditions</a></p>   
            <input type="checkbox" />
            </div>       
       
            <button>
              Sign Up
            </button>
          <p>Already have an account? <Link to="/login">Login Here</Link></p>
        </form>
        
    )
}
