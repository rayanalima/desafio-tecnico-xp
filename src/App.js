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
import Login from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Actions from './pages/Actions';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/actions" element={<Actions />}/>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
