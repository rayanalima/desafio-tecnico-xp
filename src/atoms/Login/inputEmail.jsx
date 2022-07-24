import React, { useState, useContext } from 'react';
import {
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react';
import validator from 'validator';

function InputEmail() {

  const [emailError, setEmailError] = useState(false)

  const validateEmail = (e) => {
    setEmail(e.target.value);
  
    if (validator.isEmail(email)) {
      setEmailError(false)
    }
    else {
      setEmailError('Digite um e-mail válido')
    }
  }

  console.log(emailError)

  return (
    <>
      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
        E-mail
      </FormLabel>
      <Input
        id="email-input"
        borderRadius="15px"
        fontSize="sm"
        type="email"
        mb={2}
        placeholder="Seu e-mail"
        size="lg"
        onChange={(e) => validateEmail(e)}
      />
      <Text color={'red.400'} mb={2}>
      {emailError}
      </Text>
    </>
  );
}

export default InputEmail;
