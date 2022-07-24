import React from 'react';
import LoginForm from '../organisms/login-form';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

function Login() {
  return (
    <>
    <Navbar />
    <LoginForm />
    <Footer />
    </>
  );
}

export default Login;