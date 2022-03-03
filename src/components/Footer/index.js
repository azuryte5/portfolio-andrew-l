import React from "react";
import { Box, Link, HStack, Heading } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg={"#3b83d0"}  p={4}>
      <Heading>Contact Information</Heading>
      <HStack justify={"center"} p={3}>
        <Link
          href="https://www.google.com/"
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
          G-mail
        </Link>
        <Link
          href="https://github.com/azuryte5"
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
          Github
        </Link>
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
          Twitter
        </Link>
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
          LinkedIn
        </Link>
      </HStack>
      <div className="justify-center">
        &copy;{new Date().getFullYear()} by Azuryte
      </div>
    </Box>
  );
}
export default Footer;
