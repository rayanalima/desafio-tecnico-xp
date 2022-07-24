import React from 'react';
import {
  FormLabel,
  Input,
} from '@chakra-ui/react';

function InputEmail() {

  return (
    <>
      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
        E-mail
      </FormLabel>
      <Input
        id="email-input"
        borderRadius="15px"
        mb="24px"
        fontSize="sm"
        type="text"
        placeholder="Seu e-mail"
        size="lg"
      />
    </>
  );
}

export default InputEmail;
