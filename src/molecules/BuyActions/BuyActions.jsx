import React, { useContext, useEffect, useState } from 'react';
import {
  Flex,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  ButtonGroup,
  IconButton,
  Th,
  useColorModeValue,
  Heading,
  TableCaption,
  Stack,
  SimpleGrid,
  chakra,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserActions from '../../organisms/actions';
import Context from '../../contexts/MyContext';
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import api from '../../services/apiMyActions';
import { AiTwotoneLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Navbar from '../../organisms/Navbar';

function BuyActions({email}) {
  const [idAction, setIdAction] = useContext(Context);

  const [user, setUser] = useState([]);
  const userId = 1;

  useEffect(() => {
    api
      .get(`?id=${idAction}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(err => {
        console.error('ops! ocorreu um erro : ' + err);
      });
  }, []);

  const bg = useColorModeValue('white', 'gray.800');
  const bg2 = useColorModeValue('white', 'gray.800');
  const bg3 = useColorModeValue('gray.100', 'gray.700');
  return (
    <>
    <Heading bg="#edf3f8" textAlign={'center'}>Comprar ações</Heading>
      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: '#3e3e3e',
        }}
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction={{
            base: 'column',
          }}
          w="full"
          bg={{
            md: bg,
          }}
          shadow="lg"
        >
          {user.map((token, tid) => {
            return (
              <Flex
                direction={{
                  base: 'row',
                  md: 'column',
                }}
                bg={bg2}
                key={tid}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 4,
                  }}
                  w={{
                    base: 120,
                    md: 'full',
                  }}
                  textTransform="uppercase"
                  bg={bg3}
                  color={'gray.500'}
                  py={{
                    base: 1,
                    md: 4,
                  }}
                  px={{
                    base: 2,
                    md: 10,
                  }}
                  fontSize="md"
                  fontWeight="hairline"
                >
                  <span>Empresa</span>
                  <span>Quantidade</span>
                  <span>Valor</span>
                  <chakra.span
                    textAlign={{
                      md: 'right',
                    }}
                  >
                    Negociar
                  </chakra.span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 4,
                  }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="hairline"
                >
                  <span>{token.empresa}</span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {token.quantidade}
                  </chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {token.valor}
                  </chakra.span>
                  <Flex
                    justify={{
                      md: 'end',
                    }}
                  >
                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                      <Link to={'/buy'}>
                        <IconButton
                          colorScheme="blue"
                          icon={<BsBoxArrowUpRight />}
                          aria-label="Up"
                          onClick={() => setIdAction(token.id)}
                        />
                      </Link>
                      <IconButton
                        colorScheme="green"
                        icon={<AiFillEdit />}
                        aria-label="Edit"
                      />
                    </ButtonGroup>
                  </Flex>
                </SimpleGrid>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
      </>
  );
}

export default BuyActions;
