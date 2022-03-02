import React from "react";
import { Text, Wrap, Image, VStack, WrapItem, useMediaQuery, Center } from "@chakra-ui/react"



function About() {
  const [isFullWidth] = useMediaQuery([
    '(min-width: 1099px)'])

  function determineWidth() {
      if (isFullWidth) {
        return '40%' } else return '90%'}

  return (
  <Wrap color='#CDEDF6'   
  bgGradient={[
    'linear(to-br, #413C58, #3DC4EC)',
    'linear(to-bl, #413C58, #C6E0E8)',
    'linear(to-t, #CDEDF6, #413C58)',
  ]} 
  spacing='30px' justify='center'
  flexWrap paddingTop={24} paddingBottom={30}>
      <WrapItem boxSize='sm' bg='#034F4F' borderRadius={30} boxShadow='dark-lg'>
        <Image
          alt="Man with cool glasses"
          src="https://user-images.githubusercontent.com/85147307/149609585-ea0a0e3b-1bd0-4b0f-b862-e58514787bfd.jpg" 
          borderRadius='40%'
          objectFit='contain'
          boxSize='sm'   
        />
      </WrapItem>

    <WrapItem> 
      <Center bg='#034F4F' color='#F8CAB4' fontSize={20} borderRadius={25} fontWeight='900' p={5} h={20} boxShadow='dark-lg'>
      About Andrew </Center>
      </WrapItem>

    <WrapItem bg='#034F4F' color='#F8CAB4' fontSize='1.2rem' borderRadius={25} p={6} boxShadow='dark-lg' w={determineWidth}>
      <VStack p={4}>
      <Text fontSize='xl'>
        Full stack web developer with experience in implanting creative
        solutions to improve accessibility. With a previous background in
        working with people with disabilities to meet their life goals, I have
        persistence and dedication to my products and responsibilities.
      </Text>
      <Text fontSize='xl'>
        Recently earned a certificate in development from Carleton University
        where expanded on skills in JavaScript, React with MERN stack. I've
        successfully bridged my in-person problem solving skills to a digital
        landscape. I've been able to oversee, track, set goals and build on
        previous knowledge to incorporate new ideas.
      </Text>
      <Text fontSize='xl'>
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
