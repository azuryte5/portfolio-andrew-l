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
  Wrap,
  Link,
  Text,
  Center
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
    <Container paddingTop={20} maxW='container.2xl' bg={'#9fcbe5'} w='100%'>
      <Heading p={8} size={'3xl'}>Experience</Heading>
      <Heading size={'2xl'}>Technical skills</Heading>
      <Wrap w='100%' p={5} align={"stretch"} spacing='42px' justify='center'>
        <WrapItem>
          <Container
            maxW="sm"
            // bg="#3b83d0"
            p={4}
            fontSize={"xl"}
            // borderRadius={30}
            // boxShadow='dark-lg'
          >
            <Heading p={2}>Front end</Heading>
            <List spacing={3} align='left'>
              {listFront.map((front) => {
                return (
                  <ListItem>
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
            // bg="#3b83d0"
            p={4}
            fontSize={"xl"}
            // borderRadius={30}
            // boxShadow='dark-lg'
          >
            <Heading p={2}>Backend</Heading>
            <List spacing={3} align='left'>
              {listBack.map((back) => {
                return (
                  <ListItem>
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
            // bg="#3b83d0"
            p={4}
            fontSize={"xl"}
            // borderRadius={30}
            // boxShadow='dark-lg'
          >
            <Heading p={2}>Other</Heading>
            <List spacing={3} align='left'>
              {tools.map((tool) => {
                return (
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.500" />
                    {tool}
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </WrapItem>
        
      </Wrap>
      <Divider p={2}/>
      <Heading p={4} size={'2xl'}>History</Heading>
      <Wrap w='100%' p={5} align={"stretch"} spacing='42px' justify='center'>
      <WrapItem >
      <Container
        bg="#3b83d075"
        centerContent
        p={4}
        borderRadius={30}
        boxShadow='dark-lg'
        w={'18rem'}
      >
        <Heading size={'md'} align='left'>Mentorship product manager</Heading>
        <Text padding="4" align='left'>
        Accessibility Next Gen 
        </Text>
        <Text align='left'>Developed a digital solution to match over 350 participants in a mentorship program into 125 groups which led to managing the entire product.</Text>
      </Container>
      </WrapItem> 
      <WrapItem >
      <Container
        bg="#3b83d075"
        centerContent
        p={4}
        borderRadius={30}
        boxShadow='dark-lg'
        w={'15rem'}
      >
        <Heading size={'md'} >Educational Assistant</Heading>
        <Text paddingY="4" align='left'>
        OCDSB
        </Text>
        <Text align='left'>Helped students with Autism meet their Individual Education Plans (IEPs) by creating digital and tangible visual aides and learning tools to assist learning goals.</Text>
      </Container>
      </WrapItem> 
      <WrapItem >
      <Container
        bg="#3b83d075"
        centerContent
        p={4}
        borderRadius={30}
        boxShadow='dark-lg'
        w={'15rem'}
      >
        <Heading size={'md'} >Primary Counsellor</Heading>
        <Text padding="4">
        Tamir Foundation
        </Text>
        <Text align='left'>Developed and updated guidelines and procedures for staff to follow based on medical advice from health care professionals to improve the health and wellbeing of clients, while personally supporting clients.</Text>
      </Container>
      </WrapItem> 
     </Wrap>
     <Divider p={2}/>
     <Heading p={4} size={'2xl'}>Resume</Heading>
     <Center p={8}>
      <Box borderRadius='10px' fontSize={"md"} 
            border="solid"
            paddingY={2} paddingX={6} color={'black'} bg={'#ffb833'}
            boxShadow='dark-lg'
            w={'20%'}
            _hover={{ color: 'black', bg:'#FACF7E' }}
            > 
          <Link href={resume} download="Resume.pdf">
            Download Resume
          </Link>
        </Box>
        </Center>
    </Container>
  );
}

export default Resume;
