import React , {useState,useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null)
    const {id} = useParams()
    useEffect(() => {
      fetch(`http://localhost:4000/post/${id}`)
       .then(response=>{
        response.json()
        .then(postInfo=>setPostInfo(postInfo))
       });   
    }, [id])

    console.log(postInfo)

    if(!postInfo) return '';
    
  return (
    <div className="post-page">
      <header>
      <Link to="/" className="logo">My blog</Link>
        <nav>
        <Link to="/create" className="logo" >Create new blog</Link>
        </nav>
      </header>
      <Link to={`/post/${id}`}>
        <h1 className="">{postInfo.title}</h1>
      </Link>
        <time className="t">{postInfo.createdAt}</time>
        <div>by {postInfo.author.username}</div>
        <Link to={`/post/${id}`} className="image">
            <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
        </Link>
        <div dangerouslySetInnerHTML = {{__html:postInfo.content}} />
    </div> 
  )
}

export default PostPage