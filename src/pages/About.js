import React from "react";
import { Box, Wrap, Image, VStack } from "@chakra-ui/react"

const About = () => (
  <Wrap color='#CDEDF6' bg='#034F4F' flexWrap p={20}>
      <Box boxSize='sm' bg='#F8CAB4'>
        <Image
          alt="Man with cool classes"
          src="https://user-images.githubusercontent.com/85147307/149609585-ea0a0e3b-1bd0-4b0f-b862-e58514787bfd.jpg" 
          borderRadius='full'
          objectFit='contain'
          boxSize='sm'   
        />
      </Box>

    <Box bg='#413C58' fontSize={20} fontStyle='bold' p={2} h={20}>About Andrew</Box>

    <VStack bg='#413C58' fontSize='1.2rem' w='40rem' boxSize='lg'>
      <Box>
        Full stack web developer with experience in implanting creative
        solutions to improve accessibility. With a previous background in
        working with people with disabilities to meet their life goals, I have
        persistence and dedication to my products and responsibilities.
      </Box>
      <Box>
        Recently earned a certificate in development from Carleton University
        where expanded on skills in JavaScript, React with MERN stack. I've
        successfully bridged my in-person problem solving skills to a digital
        landscape. I've been able to oversee, track, set goals and build on
        previous knowledge to incorporate new ideas.
      </Box>
      <Box>
        I excel at building tools that keep the user experience in mind so that
        progress matches end goal expectations. Promoting success by guiding,
        consulting, augmenting the capabilities of others to overcome obstacles
        and barriers with patience and dedication.
      </Box>
    </VStack>
  </Wrap>
);

export default About;
