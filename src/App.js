import { Home, Login, Signup, Profile, Search, Landing, ErrorPage, ForgotPassword } from './pages';
import { UploadForm } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:username" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path='/upload' element={<UploadForm />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
