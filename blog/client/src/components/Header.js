import React, {useEffect,useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import Posts from './Posts'
import {UserContext} from './UserContext'

const Header = () => {
  //const [username, setUsername] = useState(null)
  const {setUserInfo,userInfo} = useContext(UserContext)
  const [post, setPost] = useState([])

  useEffect( () => {
    fetch('http://localhost:4000/profile',{
      credentials:'include'
    }).then(response => {
      response.json().then(userInfo=>{
        //setUsername(userInfo.username)
        setUserInfo(userInfo)
      })
    })
    //return () =>{
    //  fetch('http/localhost:4000/post').then(response=>{response.json().then(posts=>setPost(posts))})
    //}
  },[setUserInfo])
  
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response=>{
      response.json().then(posts=>setPost(posts))
    })
  },[])

  const handleLogout = () => {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method:'POST',
    }) 
    setUserInfo(null)
  }
  const username = userInfo?.username
  //console.log(username)
  return (
    <>
    <header>
         <Link to="/" className="logo">My blog</Link>
          <nav>
            {username && (<>
              <Link to="" className="logo" >{username}</Link>
              <Link to="/create" className="logo" >Create new blog</Link>
              <button className="logout" onClick={handleLogout}>logout</button>
            </> )}
            {!username && ( <> 
              <Link to="/login">Login</Link>  
              <Link to="/register">Register</Link> 
            </> ) } {/*<a href="Login">Login</a><a href="Register">Register</a>*/}
          </nav>
    </header>
    {post.length > 0 && post.map(pos=>(<Posts {...pos} />))}
    </>
  )
}

export default Header