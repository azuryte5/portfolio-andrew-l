import { Center, Wrap } from "@chakra-ui/react";
import React from "react";
import Project from "../components/Project";


const Portfolio = () => (
  <Center >
  <Wrap spacing='100px' align='center' justify='center'>
  <Project></Project>
  </Wrap>
  </Center>
);

export default Portfolio;
