import React,{useState}from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,Input,Modal } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
 import "../css/login.css"
import axios from 'axios';
 const Signup = () => {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate()
    const SignupHandler =(e)=>{
      let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(username=='' ){
      alert("Please enter your username!")
      return false;
    }
    if(!isNaN(username)){
      alert("username allow only charectors")
      return false;
    }
     if(username.length < 3){
      alert("username allow minimum 3 charectors")
      return false;
    }
     if(username.length > 15){
      alert("username allow maximum 15 charectors")
      return false;
    }
     if (email==''){
      alert("Please enter your email")
      return false;
    }
     if (!regex.test(email)){
      alert("Email is wrong!")
      return false;
    }
    if(password==''){
    alert("Please enter your password!")
    return false;
   }
    if(password.length <8 ||password.length >8 ){
    alert("Password allow only 8 alphanumerica")
    return false;
   }
 
    const url ="http://localhost:8080/signup";
    axios.post(url,{username,email,password})
    .then((res)=>console.log(res.data))
     

  }
   return (
     <div className="login-contenar">
      <div className='login-form'>
      <form >
          <h3 style={{textAlign:"center"}}>Signup</h3>
         <div className="form-email">
        <Input prefix={<UserOutlined className='site-form-item-icon'/>}
         placeholder='Enter your name'
         style={{padding:'8px'}}
         onChange={(e)=>setUsername(e.target.value)}
        /> 
      </div>
        <div className="form-email">
        <Input prefix={<UserOutlined className='site-form-item-icon'/>}
         placeholder='Enter your email'
         style={{padding:'8px'}}
          onChange={(e)=>setEmail(e.target.value)}
        /> 
        </div>
        <div className="form-password">
        <Input prefix={<LockOutlined className='site-form-item-icon'/>}
        type='password'
         placeholder='Enter your password'
         style={{padding:'8px'}}
         onChange={(e)=>setPassword(e.target.value)} 
        /> 
        </div>
      
        <Button type='primary' size='large' 
        className='sign-btn' onClick={SignupHandler}>Signup</Button>
      </form>  
      <div className="signup">
        <span>you have already account ?<Link to='/login'>Login</Link></span>
      </div>
      </div>
     </div>
   )
 }
 
 export default Signup;
 
  