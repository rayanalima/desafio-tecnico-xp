import React from "react";
// Chakra imports
import {
  FormLabel,
  Input,
} from "@chakra-ui/react";

function InputPassword() {
  return (
    <>
      <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
        Senha
      </FormLabel>
      <Input
        borderRadius='15px'
        mb='36px'
        fontSize='sm'
        type='password'
        placeholder='Sua senha'
        size='lg'
      />
    </>
  );
}

export default InputPassword;