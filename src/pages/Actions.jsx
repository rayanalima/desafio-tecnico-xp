import React, {useContext} from 'react';
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
import UserActions from '../organisms/actions';
import MyContext from '../contexts/MyContext'
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

function Actions({email}) {

  console.log(email)
  return (
    <>
    <Navbar />
    <UserActions />
    <Footer />
    </>
  );
}

export default Actions;