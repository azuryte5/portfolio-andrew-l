import React from "react";
import { Box, Link, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillLinkedin } from "react-icons/ai" 
import {DiGithubBadge } from "react-icons/di"
import {FaTwitterSquare} from "react-icons/fa"

function Footer() {
  return (
    <Box bg={"#3b83d0"}  p={4}>
      <Heading>Contact Information</Heading>
      <Wrap justify={"center"} p={3} spacing="23px">
        <WrapItem p={2}>
        <Link
          href="mailto:and2lefebvre@gmail.com"
          isExternal
          p={2}
          fontSize={"2xl"}
          fontWeight='200'
          _hover={{fontWeight:'bold'}}
          _focus={{fontWeight:'bold'}}
        >
        <EmailIcon/>
        G-mail
        </Link>
        </WrapItem>
        <WrapItem p={2}>
        <Link
          href="https://github.com/azuryte5"
          isExternal
          p={1}
          fontSize={"2xl"}
          fontWeight='200'
          _hover={{fontWeight:'bold'}}
          _focus={{fontWeight:'bold'}}
        >
          <DiGithubBadge />
          Github
        </Link>
        </WrapItem>
        <WrapItem>
        <Link
          href="https://twitter.com/azuryte__5?lang=en"
          isExternal
          p={1}
          // border="solid"
          // borderRadius="20px"
          // paddingY={2}
          // paddingX={6}
          // color={"black"}
          // bg={"#ffb833"}
          fontSize={"2xl"}
          // boxShadow="dark-lg"
          fontWeight='200'
          _hover={{fontWeight:'bold'}}
          _focus={{fontWeight:'bold'}}
        >
          <FaTwitterSquare />
          Twitter
        </Link>
        </WrapItem>
        <WrapItem>
        <Link
          href="https://www.linkedin.com/in/andrew-lefebvre-7a7167213"
          isExternal
          p={1}
          // border="solid"
          // borderRadius="20px"
          // paddingY={2}
          // paddingX={6}
          // color={"black"}
          // bg={"#ffb833"}
          fontSize={"2xl"}
          // boxShadow="dark-lg"
          fontWeight='200'
          _hover={{fontWeight:'bold'}}
          _focus={{fontWeight:'bold'}}
        >
          <AiFillLinkedin />
          LinkedIn
        </Link>
        </WrapItem>
      </Wrap>
      <div className="justify-center">
        &copy;{new Date().getFullYear()} by Andrew Lefebvre - Azuryte
      </div>
    </Box>
  );
}
export default Footer;
