import {
    Flex,
    Table,
    Thead,
    Tr,
    Tbody,
    Td,
    ButtonGroup,
    IconButton,
    Th,
    useColorModeValue,
    Heading,
    TableCaption,
    Stack,
    SimpleGrid,
    chakra,
    Button,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Box,
    Link,
    Image,
    Text
  } from '@chakra-ui/react';
  import { useState, useEffect } from 'react';
  import api from '../services/api';
  import {FaMoneyBill} from 'react-icons/fa'
  import NumberFormat from 'react-number-format';
import NewDeposit from '../organisms/Deposit';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

function Deposit() {
    const [user, setUser] = useState([]);
    const userId = 1;
  
    useEffect(() => {
      api
        .get(`${userId}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(err => {
          console.error('ops! ocorreu um erro : ' + err);
        });
    }, []);
  return (
    <>
    <Navbar />
    <NewDeposit />
    <Footer />
    </>
  );
}

export default Deposit;
