import React, { useState } from 'react';
import {
  Stack,
  InputGroup,
  Flex
} from '@chakra-ui/react';
import NumberFormat from 'react-number-format';
import { MdAttachMoney } from 'react-icons/md';

function BuyInput() {
  const [valueInput] = useState(0);

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
    </Stack>
    </Flex>
  );
}

export default BuyInput;
