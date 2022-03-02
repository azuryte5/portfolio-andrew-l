import React from "react";
import resume from "../assets/images/Resume.pdf";
import {
  Container,
  Box,
  Heading,
  List,
  Divider,
  ListItem,
  WrapItem,
  ListIcon,
  Wrap
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function Resume() {
  const listFront = [
    "HTML5/CSS3",
    "JavaScript ES6+",
    "jQuery",
    "React.Js",
    "Handlebars",
  ];
  const listBack = [
    "Node.Js",
    "Expressjs",
    "MySQL",
    "Sequelize",
    "MongoDB",
    "GraphQL",
  ];
  const tools = [
    "ChakraUI",
    "Heroku",
    "Insomnia",
    "Apollo Studio",
    "Redux Dev Tools",
  ];

  return (
    <Container paddingTop={40} maxW='container.2xl' bgGradient={[
      'linear(to-br, #413C58, #3DC4EC)',
      'linear(to-bl, #413C58, #C6E0E8)',
      'linear(to-t, #CDEDF6, #413C58)',
    ]}>
      <Container
        maxW="xl"
        bg="#034F4F"
        color="#CDEDF6"
        centerContent
        p={2}
        borderRadius={30}
        boxShadow='dark-lg'
      >
        <Heading>Resume</Heading>
        <Box padding="4" maxW="3xl">
          Click on button below to view my resume. Please also view my
          Proficiencies below
        </Box>
        <Box fontSize={"lg"} border={'4px solid'} bg={"#CDEDF6"} color={'#034F4F'}  _hover={{ color: '#413C58', bg:'#CDEDF6', border:'4px dashed'}}> 
          <a href={resume} download="Resume.pdf">
            Download
          </a>
        </Box>
      </Container>
      <Divider p={2}/>
      <Wrap w='100%' p={5} align={"stretch"} spacing='30px' justify='center'>
        <WrapItem>
          <Container
            maxW="sm"
            bg="#034F4F"
            color="#CDEDF6"
            p={4}
            borderRadius={30}
            boxShadow='dark-lg'
          >
            <Heading p={2}>Front-End Proficiencies</Heading>
            <List spacing={3} alignItems="left">
              {listFront.map((front) => {
                return (
                  <ListItem justifyContent={"left"}>
                    <ListIcon as={CheckIcon} color="green.500" />
                    {front}
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </WrapItem>
        <WrapItem>
          <Container
            maxW="sm"
            bg="#034F4F"
            color="#CDEDF6"
            p={4}
            borderRadius={30}
            boxShadow='dark-lg'
          >
            <Heading p={2}>Back-End Proficiencies</Heading>
            <List spacing={3} alignItems="left">
              {listBack.map((back) => {
                return (
                  <ListItem justifyContent={"left"}>
                    <ListIcon as={CheckIcon} color="green.500" />
                    {back}
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </WrapItem>
        <WrapItem>
          <Container
            maxW="sm"
            bg="#034F4F"
            color="#CDEDF6"
            p={4}
            borderRadius={30}
            boxShadow='dark-lg'
          >
            <Heading p={2}>Other Proficiencies</Heading>
            <List spacing={3} alignItems="left">
              {tools.map((tool) => {
                return (
                  <ListItem justifyContent={"left"}>
                    <ListIcon as={CheckIcon} color="green.500" />
                    {tool}
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </WrapItem>
      </Wrap>
    </Container>
  );
}

export default Resume;
