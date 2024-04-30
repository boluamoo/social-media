import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Main from './pages/Main'
import CreatePost from './pages/create-post/CreatePost'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './config/firebase'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          {user && <Route path="/create" element={<CreatePost />} />}
        </Routes>
      </Router>
    </div>
  )
}

export default App
