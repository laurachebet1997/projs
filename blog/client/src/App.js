import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import {UserContextProvider} from './components/UserContext'


function App() {
  return (
    
    <main>
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreatePost />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>
      </Routes>
      </UserContextProvider>
      </main>
      
  );
}

export default App;
