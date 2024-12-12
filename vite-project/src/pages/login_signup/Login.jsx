import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Login.module.css";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const onSubmit=async()=>{
    try{
      const sendSign =await fetch('http://localhost:3000/user/Login',{
        method:"POST",
      headers:{
        'Content-Type':"<application/>json"
      },
      body:json.stringfy({name,email,password})
    });
      }
    }
  }








  return (
    <div className={Style.full}>
    <div>
      <h1 className={Style.hello}>Login</h1>
      <div>
        <input type="email" name="email" id="" placeholder="email" />
        <input type="password" name="password" id="" placeholder="password" />
        <button>Login</button>
      </div>
      <div>
        <p>dont have an account? <Link to="/Signup">signup</Link></p>

      </div>
    </div>
    </div>
  )


export default Login;
