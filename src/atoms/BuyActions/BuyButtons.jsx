import React from 'react';
import {
  Stack,
  Button,
  Flex
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function BuyButtons() {

  return (
    <Flex bg="#edf3f8" justify={'center'}>
    <Stack bg="#edf3f8" spacing={4}>
      <Flex bg="#edf3f8" justify={'center'} >
        <Link to={'/actions'}>
      <Button
                data-testid='deposit'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w='45%'
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
                w='45%'
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

export default BuyButtons;
