import React,{ useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Resigter';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [token ,setToken] = useState('')
  return (
    <div>
     
     <div>
      <ToastContainer />
     </div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login  setToken={setToken}/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;