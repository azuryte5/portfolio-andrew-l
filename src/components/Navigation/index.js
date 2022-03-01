import { Box, HStack, Link, Spacer } from "@chakra-ui/react";
import React from "react";

import { Link as Route} from "react-router-dom"

function Nav() {
  return (
    <Box p={3} bg="#413C58" color='#CDEDF6' zIndex={200} w="full" position="fixed" fontSize={30}>
      <HStack p={1}>
        <Link href="https://github.com/azuryte5" isExternal border='dashed' borderRadius='20px' p={1} >Andrew Lefebvre</Link>
        <Spacer />
        <Link as={Route} to="/" border='dashed' borderRadius='20px' p={1}>About</Link>
        <Link as={Route} to="/portfolio" border='dashed' borderRadius='20px' p={1}>Portfolio</Link>
        <Link as={Route} to="/resume" border='dashed' borderRadius='20px' p={1}>Resume</Link>
      </HStack>
    </Box>
  );
}

export default Nav;
