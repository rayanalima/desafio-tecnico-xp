import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Login from './pages/Login';
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
