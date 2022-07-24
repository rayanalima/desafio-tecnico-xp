import React, { useState, createContext, useContext } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Login from './pages/Login';
import Context  from './contexts/MyContext'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Actions from './pages/Actions';
import Buy from './pages/BuyActions';

function App() {

  const [idAction, setIdAction] = useState(0);

  return (
    <Context.Provider value={[idAction, setIdAction]}>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/actions" element={<Actions />}/>
        <Route path="/buy" element={<Buy />}/>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </Context.Provider>
  );
}



export default App;
