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
import EmailLogin from '../organisms/login-form';

function Login() {
  return (
    <EmailLogin />
  );
}

export default Login;