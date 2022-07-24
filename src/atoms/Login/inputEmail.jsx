<<<<<<< HEAD
import React, { useState, useContext } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> d1b2a549071b647fa96eece24a7d4af2bd21db3f
import {
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react';
import validator from 'validator';

function InputEmail() {

<<<<<<< HEAD
  const [emailError, setEmailError] = useState(false)

  const validateEmail = (e) => {
    let email = (e.target.value);
  
    if (validator.isEmail(email)) {
      setEmailError(false)
    }
    else {
=======
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    let email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError(false)
    } else {
>>>>>>> d1b2a549071b647fa96eece24a7d4af2bd21db3f
      setEmailError('Digite um e-mail válido')
    }
  }

<<<<<<< HEAD
  console.log(emailError)

=======
>>>>>>> d1b2a549071b647fa96eece24a7d4af2bd21db3f
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
