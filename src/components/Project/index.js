import React from "react";
import { Text, Image, VStack, WrapItem, HStack, Link, Tag} from "@chakra-ui/react";



const Project = () => {
    
    const projectList = [
        { name: '| Paint | Between the lines', deploy:"https://paintbetweenthelines.herokuapp.com/colouring", link: 'https://github.com/jhugray/colouring', image:'https://user-images.githubusercontent.com/85147307/156236478-bd34482a-3eac-42b9-9bb4-1820622e4d77.png', subtitle:"React Colouring PSA PWA"},
        { name: 'Sputtle Music App', deploy:"https://music-battle-spotify.herokuapp.com/", link: 'https://github.com/azuryte5/music-battle-spotify', image:'https://user-images.githubusercontent.com/85147307/149671331-4c47a551-9024-4890-9f69-c198e5403845.png', subtitle:"Spotify API Music Battle MVC"},
        { name: 'Nutrivalue', deploy:"https://azuryte5.github.io/Nutrition-Sustenance-Value/", link: 'https://github.com/azuryte5/Nutrition-Sustenance-Value', image:'https://user-images.githubusercontent.com/85147307/156245560-f1b4cc0c-f34e-4ea3-89cd-53bb70318622.png', subtitle:"Front End Recipe and Map API"},
        { name: 'Tech it Ralph', deploy:"https://polar-sierra-45467.herokuapp.com/", link: 'https://github.com/azuryte5/Tech-It-Ralph', image:'https://user-images.githubusercontent.com/85147307/156245893-cd472e27-c20b-43d8-88da-608e989050f0.png', subtitle:"MVC Tech Blog w auth"},
        { name: 'Vault-tec PWA', deploy:"https://vault-tec-pwa.herokuapp.com/", link: 'https://github.com/azuryte5/vault-tec-PWA', image:'https://user-images.githubusercontent.com/85147307/156247653-0137a60a-c3ee-42cb-93ba-296c9d64917e.png', subtitle:"PWA"},
        { name: 'Art of Recruiter Programming', deploy:"https://watch.screencastify.com/v/YOPYRYz2gPMBQIwlur3i", link: 'https://github.com/azuryte5/art-of-recruiter-programming', image:'https://user-images.githubusercontent.com/85147307/149671175-acf4f25d-5ada-4077-9744-4c518a4fe9fe.png', subtitle:"OOP inquirer roster page generation"},
        { name: 'Deep Space Manager', deploy:"https://watch.screencastify.com/v/zBSdIeIjVO7j8RvXqgW0", link: 'https://github.com/azuryte5/deep-space-manager', image:'https://user-images.githubusercontent.com/85147307/149609664-94b7ab92-7909-43f3-9f91-da445f24d2fd.png', subtitle:"Back End Sequelize"},

]    
    return (
    <>
    {projectList.map(project => {
    return (
    <WrapItem bg='#F8CAB4' key={project.name} borderRadius="20px" boxShadow='dark-lg'>
    <VStack w="25rem">
        <Image src={project.image} alt="Card image" objectFit='contain' p={8} h='300px' objectPosition='center'/>
            <Text color={'#034F4F'} fontSize='3xl'>{project.name}</Text>
            <Tag bg={'#CDEDF6'} variant='outline' color={'#034F4F'} fontSize='2xl'>{project.subtitle}</Tag>
            <Text color={'#034F4F'} >Here is where I put some extra text describing in one sentence what I made.</Text>
            <HStack p={4}>
            <Link href={project.deploy} bg="#034F4F" color='#CDEDF6' target='_blank' _hover={{ color: '#413C58', bg:'#CDEDF6' }} borderRadius="10px" p={3}>Deployed App</Link>
            <Link href={project.link} bg="#034F4F" color='#CDEDF6' target='_blank'_hover={{ color: '#413C58', bg:'#CDEDF6' }}borderRadius="10px" p={3}>GitHub</Link>
            </HStack>
    </VStack>
    </WrapItem>
    )})
    }
    </>
    )
}


export default Project;