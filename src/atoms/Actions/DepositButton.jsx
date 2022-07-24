import React from "react";
import {
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function DepositButton() {

  return (
              <Link to={'/actions'}>
              <Button
              justify={'center'}
                data-testid='xp-logo'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w='50%'
                h='45'
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
                Depósito / Retirada
              </Button>
</Link>
  );
}

export default DepositButton;
