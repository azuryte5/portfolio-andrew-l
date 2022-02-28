import { Box, HStack, Link, Spacer } from "@chakra-ui/react";
import React from "react";

import { Link as Route} from "react-router-dom"

function Nav() {
  return (
    <Box p={3} bg="#413C58" color='#CDEDF6' zIndex={200} w="full" position="fixed">
      <HStack>
        <Link href="https://github.com/azuryte5" isExternal>Andrew Lefebvre</Link>
        <Spacer />
        <Link as={Route} to="/">About</Link>
        <Link as={Route} to="/portfolio">Portfolio</Link>
        <Link as={Route} to="/resume">Resume</Link>
      </HStack>
    </Box>
  );
}

export default Nav;
