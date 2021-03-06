import {
  Box,
  HStack,
  Link,
  Spacer,
  useDisclosure,
  IconButton,
  Stack,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as Route } from "react-router-dom";

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      p={3}
      bg="#3b83d0"
      color="#CDEDF6"
      zIndex={200}
      w="100%"
      position="fixed"
    >
      <Flex h={16} justify={'start'} align='center'>
          <Link
            href="https://github.com/azuryte5"
            isExternal
            paddingY={2} paddingX={5}
            fontSize={'2xl'}
            bg={'#EAF7FF60'}
            color={'black'}
            boxShadow='dark-lg'
            borderRadius={'3px'}
          >   
          <Avatar
          size={"lg"}
          src={"https://user-images.githubusercontent.com/85147307/149609585-ea0a0e3b-1bd0-4b0f-b862-e58514787bfd.jpg"}
          alt={'Male face slightly looking right with rainbow tint glasses'}
          />
            Andrew Lefebvre
          </Link>
        <Spacer />
        <HStack as={"nav"} display={{ base: 'none', md: 'flex' }} spacing='10px'>
          <Link as={Route} to="portfolio-andrew-l/" border="solid" borderRadius="20px" paddingY={2} paddingX={6} color={'black'} bg={'#ffb833'} fontSize={'2xl'} boxShadow='dark-lg' _hover={{ color: 'black', bg:'#FACF7E' }}>
            About
          </Link>
          <Link
            as={Route}
            to="portfolio-andrew-l/portfolio"
            border="solid"
            borderRadius="20px"
            paddingY={2} paddingX={6} color={'black'} bg={'#ffb833'}
            fontSize={'2xl'}
            boxShadow='dark-lg'
            _hover={{ color: 'black', bg:'#FACF7E' }}
          >
            Portfolio
          </Link>
          <Link
            as={Route}
            to="portfolio-andrew-l/resume"
            border="solid"
            borderRadius="20px"
            paddingY={2} paddingX={6} color={'black'} bg={'#ffb833'}
            fontSize={'2xl'} boxShadow='dark-lg'
            _hover={{ color: 'black', bg:'#FACF7E' }}
          >
            Experience
          </Link>
        </HStack>
        <IconButton
          color={'#034F4F'}
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen ? (
        <Box p={6} display={{ md: "none" }} >
          <Stack as={"nav"} spacing={8} w={'80%'} justify="center">
          <Link as={Route} to="portfolio-andrew-l/" border="solid" borderRadius="20px" paddingY={2} paddingX={6} color={'black'} bg={'#ffb833'} fontSize={'2xl'} boxShadow='dark-lg' onClick={isOpen ? onClose : onOpen}>
            About
          </Link>
          <Link
            as={Route}
            to="portfolio-andrew-l/portfolio"
            border="solid"
            borderRadius="20px"
            paddingY={2} paddingX={6} color={'black'} bg={'#ffb833'}
            fontSize={'2xl'}
            boxShadow='dark-lg'
            onClick={isOpen ? onClose : onOpen}
          >
            Portfolio
          </Link>
          <Link
            as={Route}
            to="portfolio-andrew-l/resume"
            border="solid"
            borderRadius="20px"
            paddingY={2} paddingX={6} color={'black'} bg={'#ffb833'}
            fontSize={'2xl'} boxShadow='dark-lg'
            onClick={isOpen ? onClose : onOpen}
          >
            Experience
          </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Nav;
