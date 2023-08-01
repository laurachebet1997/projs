import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [files, setFiles] = useState('')
  const navigate = useNavigate();

  const handleCreate = async (e)=>{
    const data = new FormData();
    data.set('title',title)
    data.set('summary',summary)
    data.set('content',content)
    data.set('file',files[0])
    e.preventDefault();
    const response = await fetch('http://localhost:4000/post',{
      method: 'POST',
      body:data,
      credentials: 'include'
    })
    if(response.status === 200){
      navigate('/')
    }
  }

  const modules = {
      toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        ["link", "image", "video"],
        ["clean"],
      ],
  };

  return (
    <div>
      <header>
      <Link to="/" className="logo">My blog</Link>
        <nav>
        <Link to="/create" className="logo" >Create new blog</Link>
        </nav>
      </header>
      <form onSubmit = {handleCreate} >
        <input type="title" placeholder={title} value={title} onChange={e=>{setTitle(e.target.value)}} />
        <input type="summary" placeholder={summary}value={summary} onChange={e=>{setSummary(e.target.value)}}/>
        <input type="file" onChange={e=>setFiles(e.target.files)} />
        <ReactQuill value={content} 
                    modules={modules} 
                    onChange={newValue=>{setContent(newValue)}} 
                    theme="snow"
                    placeholder="Write your post..."/>
        <button className="logout" style={{marginTop:'10px'}} >create</button>
      </form>
    </div>
  )
}

export default CreatePost