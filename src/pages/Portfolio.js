import { Center, Wrap } from "@chakra-ui/react";
import React from "react";
import Project from "../components/Project";


const Portfolio = () => (
  <Center bgGradient={[
    'linear(to-br, #413C58, #3DC4EC)',
    'linear(to-bl, #413C58, #C6E0E8)',
    'linear(to-t, #CDEDF6, #413C58)',
  ]}>
  <Wrap spacing='100px' align='center' justify='center' paddingTop={100} paddingBottom={10}>
  <Project></Project>
  </Wrap>
  </Center>
);

export default Portfolio;
