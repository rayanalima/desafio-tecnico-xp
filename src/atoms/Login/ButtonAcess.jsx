import React, {useContext} from "react";
import {
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Context from "../../contexts/MyContext";

function ButtonAcess() {
  const [isValid ] = useContext(Context);

  return (
              <Link to={'/actions'}>
              <Button
                data-testid='xp-logo'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w='100%'
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
                disabled={isValid}
                >
                ACESSAR SUA CONTA
              </Button>
</Link>
  );
}

export default ButtonAcess;
