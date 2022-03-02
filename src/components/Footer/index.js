import React from "react";
import { Box, Link, HStack } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg={'#3b83d0'} color={'#CDEDF6'} p={4}>
          Contact Information
           
          <HStack justify={'center'} p={3}>
          <Link href="https://www.google.com/" isExternal border='dashed' borderRadius='20px' p={1} >G-mail</Link>
          <Link href="https://github.com/azuryte5"  isExternal border='dashed' borderRadius='20px' p={1} >Github</Link>
          <Link href="https://twitter.com/azuryte__5?lang=en"  isExternal border='dashed' borderRadius='20px' p={1} >Twitter</Link>
          <Link href="https://www.linkedin.com/in/andrew-lefebvre-7a7167213"  isExternal border='dashed' borderRadius='20px' p={1} >LinkedIn</Link>
        </HStack>
        <div className="justify-center">
          &copy;{new Date().getFullYear()} by Azuryte
        </div>
    </Box>
  );
}
export default Footer;
