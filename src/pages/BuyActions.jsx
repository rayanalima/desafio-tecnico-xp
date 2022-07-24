import React, { useContext } from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  Input,
} from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserActions from '../organisms/actions';
import BuyActions from '../organisms/BuyActions';
import Context from '../contexts/MyContext'

function Buy() {
    const [idAction, setIdAction] = useContext(Context);

  return (
<p>{idAction}</p>
  );
}

export default Buy;