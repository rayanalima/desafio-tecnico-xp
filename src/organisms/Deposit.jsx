import { Flex, Box, Text, ButtonGroup, Button, Stack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import api from '../services/api';
import { FaMoneyBill } from 'react-icons/fa';
import NumberFormat from 'react-number-format';
import DepositButton from '../atoms/Actions/DepositButton';

function NewDeposit() {
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
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: '#3e3e3e',
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          maxW="2xl"
        >
          <Flex mt={2}>
            <FaMoneyBill size={22} />
            <Text ml={3} textAlign="center">
              Saldo Atual
            </Text>
          </Flex>
          <NumberFormat
            value={user.saldo}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            fixedDecimalScale={true}
            decimalScale={2}
            prefix={'R$ '}
          />
        </Box>
      </Flex>
      <Stack bg="#edf3f8"spacing={4}>
      <ButtonGroup p={50} alignSelf={'center'}>
        <Button>Voltar</Button>
        <Button>Confirmar</Button>
      </ButtonGroup>
      </Stack>
    </>
  );
}

export default NewDeposit;
