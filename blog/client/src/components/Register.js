import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type': 'application/json'}
    }) 
    if(response.status === 200){
      alert('registeration done')
    } else{
      alert('reg failed')
    }
  }
  return (
    <div className="registerPage">
        <header>
            <Link to="/" className="logo">Home</Link>
        </header>
        <form  className="register" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <input type="text" placeholder="name"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <input type="password"  placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button>Register</button>
        </form>
        <h3>Already a member? <Link to="/login" className="logo">Login</Link> </h3>
    </div>
  )
}

export default Register