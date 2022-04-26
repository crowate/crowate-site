import { Home, Login, Signup, Profile, Search, Landing, ErrorPage, ForgotPassword } from './pages';
import { UploadForm } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Post from './pages/post/Post';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Doesnt work :)*/}
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path='/upload' element={<UploadForm />} />
          <Route path='/post/:postID' element={<Post />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
