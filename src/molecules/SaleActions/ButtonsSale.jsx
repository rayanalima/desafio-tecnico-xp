import React, { useState } from 'react';
import {
  Stack,
  Button,
  InputGroup,
  Flex
} from '@chakra-ui/react';
import NumberFormat from 'react-number-format';
import { MdAttachMoney } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ButtonsSale() {
  const [valueInput] = useState(0);

  console.log(valueInput)
  return (
    <Flex bg="#edf3f8" justify={'center'}>
    <Stack bg="#edf3f8" spacing={4}>
      <InputGroup p={[0, 50]} w={['170', '2xl']} justifyContent={'center'} bgColor={'#edf3f8'} alignSelf={'center'}>
        <MdAttachMoney size={40} />
        <NumberFormat
        value={valueInput}
        displayType={'input'}
        thousandSeparator={'.'}
        decimalSeparator={','}
        fixedDecimalScale={true}
        decimalScale={2}
        prefix={'R$ '}
        />
      </InputGroup>
      <Flex bg="#edf3f8" justify={'center'} >
      <Link to={'/actions'}>
      <Button
                data-testid='deposit'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w={'50%'}
                h='45'
                ml={28}
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "#E161A5",
                }}
                _active={{
                  bg: "#E161A5",
                }}
                >
                Voltar
              </Button>
              </Link>
              <Button
                data-testid='deposit'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w={['52%' ,'15%']}
                h='45'
                ml={10}
                mr={20}
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "#E161A5",
                }}
                _active={{
                  bg: "#E161A5",
                }}
                >
                Confirmar
              </Button>
      </Flex>
    </Stack>
    </Flex>
  );
}

export default ButtonsSale;
