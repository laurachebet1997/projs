import React, {useState, useContext} from 'react'
import { Link , useNavigate } from 'react-router-dom';
import {UserContext} from '../components/UserContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const {setUserInfo} = useContext(UserContext)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
     const response = await fetch('http://localhost:4000/login', {
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type': 'application/json'},
      credentials: 'include',
    }) 
    //console.log(response.ok)
    if(response.status === 200){
      response.json().then(userInfo=>{ 
        setUserInfo(userInfo)
        setRedirect(true)
        navigate('/')
      })
      
    } 
    if(response.status === 204){
      alert('wrong credentials')
    } 
    if(response.status === 400){
      alert('wrong password or name')
    } 
    if(redirect) {
     //navigate('/')
    }
    
  }
  return (
    <div className="loginPage">
      <header>
        <Link  className="logo" to="/">Home</Link>
      </header>
      <form className="login" onSubmit={handleSubmit} action="submit">
        <h1>Login</h1>
        <input type="text" placeholder="name"  value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="password"  placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button >Login</button>
      </form>
      <h3>Not a member? <Link to="/register" className="logo">Register</Link> </h3>
    </div>
  )
}

export default Login