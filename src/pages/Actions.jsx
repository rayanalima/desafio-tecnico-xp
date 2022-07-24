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
import UserActions from '../organisms/actions';

function Actions() {
  return (
    <UserActions />
  );
}

export default Actions;