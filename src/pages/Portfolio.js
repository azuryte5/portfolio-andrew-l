import { Center, Wrap } from "@chakra-ui/react";
import React from "react";
import Project from "../components/Project";


const Portfolio = () => (
  <Center  bg={'#9fcbe5'} w='100%'>
  <Wrap spacing='50px' align='top' justify='center' paddingTop={100} paddingBottom={10}>
  <Project></Project>
  </Wrap>
  </Center>
);

export default Portfolio;
