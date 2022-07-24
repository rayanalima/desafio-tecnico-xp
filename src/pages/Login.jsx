import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginForm from '../organisms/login-form';

function Login() {
  return (
    <LoginForm />
  );
}

export default Login;