import React from "react";
import { Box, Image, VStack, WrapItem, HStack, Link} from "@chakra-ui/react";



const Project = () => {
    
    const projectList = [
        { name: '| Paint | Between the lines', deploy:"https://paintbetweenthelines.herokuapp.com/colouring", link: 'https://github.com/jhugray/colouring', image:'https://user-images.githubusercontent.com/85147307/152003893-e56946e1-565f-4609-997b-1956f47ba182.png', subtitle:"React Colouring PSA PWA"},
        { name: 'Sputtle Music App', deploy:"https://music-battle-spotify.herokuapp.com/", link: 'https://github.com/azuryte5/music-battle-spotify', image:'https://user-images.githubusercontent.com/85147307/149671331-4c47a551-9024-4890-9f69-c198e5403845.png', subtitle:"Spotify API Music Battle MVC"},
        { name: 'Nutrivalue', deploy:"https://azuryte5.github.io/Nutrition-Sustenance-Value/", link: 'https://github.com/azuryte5/Nutrition-Sustenance-Value', image:'https://user-images.githubusercontent.com/85147307/149609594-266b3b58-5ad4-443a-a6cb-0da8a3ced07e.png', subtitle:"Front End Recipe and Map API"},
        { name: 'Tech it Ralph', deploy:"https://polar-sierra-45467.herokuapp.com/", link: 'https://github.com/azuryte5/Tech-It-Ralph', image:'https://user-images.githubusercontent.com/85147307/149609655-39cf6c72-7ecc-41f5-aa96-d8e4bec8cb99.png', subtitle:"MVC Tech Blog w auth"},
        { name: 'Vault-tec PWA', deploy:"https://vault-tec-pwa.herokuapp.com/", link: 'https://github.com/azuryte5/vault-tec-PWA', image:'https://user-images.githubusercontent.com/85147307/149609610-2029cbad-b38c-4d0e-bebd-77da3e83403d.png', subtitle:"PWA"},
        { name: 'Art of Recruiter Programming', deploy:"https://watch.screencastify.com/v/YOPYRYz2gPMBQIwlur3i", link: 'https://github.com/azuryte5/art-of-recruiter-programming', image:'https://user-images.githubusercontent.com/85147307/149671175-acf4f25d-5ada-4077-9744-4c518a4fe9fe.png', subtitle:"OOP inquirer roster page generation"},
        { name: 'Deep Space Manager', deploy:"https://watch.screencastify.com/v/zBSdIeIjVO7j8RvXqgW0", link: 'https://github.com/azuryte5/deep-space-manager', image:'https://user-images.githubusercontent.com/85147307/149609664-94b7ab92-7909-43f3-9f91-da445f24d2fd.png', subtitle:"Back End Sequelize"},

]    
    return (
    <>
    {projectList.map(project => {
    return (
    <WrapItem bg='#F8CAB4' key={project.name} borderRadius="20px">
    <VStack w="20rem">
        <Image src={project.image} alt="Card image" objectFit='cover' p={8} h='300px' objectPosition='left'/>
            <Box>{project.name}</Box>
            <Box>{project.subtitle}</Box>
            <HStack p={4}>
            <Link href={project.deploy} bg="#034F4F" color='#CDEDF6' target='_blank' _hover={{ color: '#413C58', bg:'#CDEDF6' }} borderRadius="10px" p={1}>Deployed App</Link>
            <Link href={project.link} bg="#034F4F" color='#CDEDF6' target='_blank'_hover={{ color: '#413C58', bg:'#CDEDF6' }}borderRadius="10px" p={1}>GitHub</Link>
            </HStack>
    </VStack>
    </WrapItem>
    )})
    }
    </>
    )
}


export default Project;