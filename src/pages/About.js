import React from "react";
import { Text, Wrap, Image, VStack, WrapItem, useMediaQuery, Heading } from "@chakra-ui/react"



function About() {
  const [isFullWidth] = useMediaQuery([
    '(min-width: 1150px)'])

  function determineWidth() {
      if (isFullWidth) {
        return '55%' } else return '90%'}

  return (
  <Wrap color='#CDEDF6'   
  bgGradient={[
    'linear(to-br, #9fcbe5, #EAF7FF)'
  ]} 
  spacing='30px' justify='center'
  flexWrap paddingTop={24} paddingBottom={30}>
      <WrapItem boxSize='sm' bg='#3b83d0' borderRadius={30} boxShadow='dark-lg' justifyContent={'center'} alignItems={'center'}>
        <Image
          alt="Man with blond hair wearing a winter jacket sitting with a snow wall"
          src="https://user-images.githubusercontent.com/85147307/156422003-b2c1b630-db90-4705-a416-9364c6cac935.png" 
          h={300}
          borderRadius={30}     
        />
      </WrapItem>

    <WrapItem bg='#EAF7FF80'color='black' fontSize='1.2rem' borderRadius={25} p={6} boxShadow='dark-lg' w={determineWidth} alignItems={'left'}>
      <VStack align='left' p={4}>
      <Heading align='left' letterSpacing='wide' fontWeight='semibold'>About Me </Heading>
      <Text fontSize='xl' align='left'>
        Full stack web developer with experience in implanting creative
        solutions to improve accessibility. With a previous background in
        working with people with disabilities to meet their life goals, I have
        persistence and dedication to my products and responsibilities.
      </Text>
      <Text fontSize='xl'align='left'>
        Recently earned a certificate in development from Carleton University
        where expanded on skills in JavaScript, React with MERN stack. I've
        successfully bridged my in-person problem solving skills to a digital
        landscape. I've been able to oversee, track, set goals and build on
        previous knowledge to incorporate new ideas.
      </Text>
      <Text fontSize='xl' align='left'>
        I excel at building tools that keep the user experience in mind so that
        progress matches end goal expectations. Promoting success by guiding,
        consulting, augmenting the capabilities of others to overcome obstacles
        and barriers with patience and dedication.
      </Text>
      </VStack>
    </WrapItem>
  </Wrap>
  ) 
}

export default About;
