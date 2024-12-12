import React, { useState } from "react"
import { Link } from "react-router-dom"
import style from "./Signup.module.css";

const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();


  const onSubmit=async()=>{
    try{
      const sendSign = await fetch('http://localhost:3000/user/Signup',{
      method:"POST",
      headers:{
        'Content-Type':"<application/>json"
      },
      body:json.stringfy({name,email,password})
    })
    const response=await sendSign.json();
    if(response.ok){
      alert("Restration successfully")
    }else{
      alert("Registration failed")
    }



    }catch(error){
      console.log(error);
  }
}







  return (
    <div className={style.full}>
      <div>
        <h1 className={style.hello}>Signup</h1>
    <div>
      <input type="text" name="" id="" placeholder="username" onChange={(e)=>setname(e.target.value)}/> <br/><br/>
      <input type="text" name="" id="" placeholder="email" onChange={(e)=>setemail(e.target.value)}/> <br/><br/>
      <input type="text" name="" id="" placeholder="password" onchange={(e)=>setpassword(e.target.value)}/> <br/><br/>/
      <button onClick={onSubmit()} className={StyleSheetList.button}>submit</button>

      <div>
        <p style={{color:"black"}}>already a member?<Link to="/Login">login</Link>
        </p>
      </div>
    </div>
    </div>

    </div>
  )
}


export default Signup;
