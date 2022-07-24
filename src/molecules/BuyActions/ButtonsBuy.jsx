import React, { useContext, useEffect, useState } from 'react';
import {
  ButtonGroup,
  Stack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import NumberFormat from 'react-number-format';
import {MdAttachMoney} from 'react-icons/md'

function ButtonsBuy() {


  const [value, setValue] = useState(0);


  const handleChange = (event) => {
    setValue(event.target.value)
};

  console.log(value)
  return (
      <Stack bg="#edf3f8"spacing={4}>
                  <InputGroup p={50} w={['170', '2xl']} alignSelf={'center'}>
                    <MdAttachMoney size={40} />
                    <Input type={'number'} onChange={handleChange} placeholder="Enter amount" />
                  </InputGroup >
                  <ButtonGroup p={50} alignSelf={'center'} >
                  <Button>
                    Voltar
                  </Button>
                  <Button>
                    Confirmar
                  </Button>
                  </ButtonGroup>
                  <ButtonGroup p={50} alignSelf={'center'} >
                  <Button>
                    Voltar
                  </Button>
                  <Button>
                    Confirmar
                  </Button>
                  </ButtonGroup>
                </Stack>
  );
}

export default ButtonsBuy;
