import React from "react";
import { Text, Wrap, Image, VStack, WrapItem, useMediaQuery, Heading } from "@chakra-ui/react"



function About() {
  const [isFullWidth] = useMediaQuery([
    '(min-width: 850px)'])

  function determineWidth() {
      if (isFullWidth) {
        return '55%' } else return '90%'}

  return (
  <Wrap
  bg={'#9fcbe5'} 
  spacing='10px' 
  justify='center'
  flexWrap 
  // paddingTop={24} paddingBottom={20}
  padding={24}
  >
      <WrapItem boxSize='sm' justifyContent={'center'} alignItems={'center'}>
        <Image
          alt="Man with blond hair wearing a winter jacket sitting with a snow wall"
          src="https://user-images.githubusercontent.com/85147307/156422003-b2c1b630-db90-4705-a416-9364c6cac935.png" 
          h={300}
          borderRadius={30}
          boxShadow='dark-lg'     
        />
      </WrapItem>

    <WrapItem color='black' fontSize='1.1rem' w={determineWidth} alignItems={'left'}>
      <VStack align='left' p={2} borderStyle={'none'}>
      <Heading align='left' letterSpacing='wide' fontWeight='semibold'>About Me </Heading>
      <Text fontSize='md' align='left'>
      I’m Andrew, a soft-hearted full stack web developer with experience in producing creative solutions to improve accessibility. With a background of 10+ years working hands-on with People with Disabilities to help them meet their life goals, I've successfully bridged my in-person problem solving skills to a digital landscape.
      </Text>
      <Text fontSize='md'align='left'>
      Having recently earned a certificate in Development from Carleton University where I developed skills in JavaScript and React with MERN stack, I have proved my persistence and determination to my products and responsibilities. I excel at overseeing projects, tracking deliverables, reaching goals and building on previous knowledge to generate new ideas.
      </Text>
      <Text fontSize='md' align='left'>
      I am passionate about user experience and making sure that user progress matches end goal expectations. I promote success by guiding, consulting, and augmenting the capabilities of others to overcome obstacles with patience and dedication.
      </Text>
      </VStack>
    </WrapItem>
  </Wrap>
  ) 
}

export default About;
