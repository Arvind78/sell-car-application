 import React,{useState,useEffect}from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,Input,Modal } from 'antd';
import { Link,useNavigate} from 'react-router-dom';
 import "../css/login.css"
import axios from 'axios';

 const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate()
     useEffect(()=>{
      const token = localStorage.getItem('sellcartoken')
      if(token) return navigate("/")
     },[])

    const loginHandler =(e)=>{
        e.preventDefault();
       if (email==''){
          alert("Please enter your email")
          return false
        }
      else if(password==""){
        alert("Please enter your email")
        return false
      }
      else{
        const url ="http://localhost:8080/signin";
         axios.post(url,{email,password})
       .then((res)=>{
        localStorage.setItem("sellcartoken",res.data.token)
         alert(res.data.massage)
      })
      const token = localStorage.getItem('sellcartoken')
        if(token) return navigate("/")
      }
    }

   return (
     <div className="login-contenar">
      <div className='login-form'>
      <form>
          <h3 style={{textAlign:"center"}}>Login</h3>
        <div className="form-email">
        <Input prefix={<UserOutlined className='site-form-item-icon'/>}
         placeholder='Enter your email'
         style={{padding:'8px'}}
          onChange={(e)=>setEmail(e.target.value)}
        /> 
        </div>
        <div className="form-password">
        <Input prefix={<LockOutlined className='site-form-item-icon'/>}
         placeholder='Enter your password'
         style={{padding:'8px'}}
         onChange={(e)=>setPassword(e.target.value)} 
        /> 
        </div>
        <div className="forget-password">
            forgot password
        </div>
        <Button type='primary' size='large' className='login-btn'
         onClick={loginHandler} >Log In</Button>
      </form>  
      <div className="signup">
        <span>don't have account ?<Link to='/signup'>Signup</Link></span>
      </div>
      </div>
     </div>
   )
 }
 
 export default Login;
 
 
  