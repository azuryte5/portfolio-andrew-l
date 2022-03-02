import {
  Box,
  HStack,
  Link,
  Spacer,
  useDisclosure,
  IconButton,
  Stack,
  MenuDivider,
  MenuItem,
  Button,
  Avatar,
  MenuList,
  Flex,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as Route } from "react-router-dom";

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      p={3}
      bg="#413C58"
      color="#CDEDF6"
      zIndex={200}
      w="full"
      position="fixed"
      fontSize={30}
    >
      <Flex h={16} justify={'start'} alignItems={'center'}>
      <Avatar
              size={"lg"}
              src={"https://user-images.githubusercontent.com/85147307/149609585-ea0a0e3b-1bd0-4b0f-b862-e58514787bfd.jpg"
              }/>
          <Link
            href="https://github.com/azuryte5"
            isExternal
            borderRadius="20px"
            p={1}
            fontSize={'2xl'}
          >
            Andrew Lefebvre
          </Link>
        <Spacer />
        <HStack as={"nav"} display={{ base: 'none', md: 'flex' }} >
          <Link as={Route} to="/" border="dashed" borderRadius="20px" p={1}>
            About
          </Link>
          <Link
            as={Route}
            to="/portfolio"
            border="dashed"
            borderRadius="20px"
            p={1}
          >
            Portfolio
          </Link>
          <Link
            as={Route}
            to="/resume"
            border="dashed"
            borderRadius="20px"
            p={1}
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
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}>
            
          </MenuButton>
          <MenuList>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuDivider />
            <MenuItem>Link 3</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link as={Route} to="/" border="dashed" borderRadius="20px" p={1}>
              About
            </Link>
            <Link
              as={Route}
              to="/portfolio"
              border="dashed"
              borderRadius="20px"
              p={1}
            >
              Portfolio
            </Link>
            <Link
              as={Route}
              to="/resume"
              border="dashed"
              borderRadius="20px"
              p={1}
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
