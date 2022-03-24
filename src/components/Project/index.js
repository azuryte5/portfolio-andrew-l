import React from "react";
import { Text, Image, VStack, WrapItem, HStack, Link, Tag} from "@chakra-ui/react";



const Project = () => {
    
    const projectList = [
        { alt:'Rainbow paintcan logo pouring ink drop over the words Paint between the lines', name: 'Paint Between the lines', deploy:"https://paintbetweenthelines.herokuapp.com/colouring", link: 'https://github.com/jhugray/colouring', image:'https://user-images.githubusercontent.com/85147307/156236478-bd34482a-3eac-42b9-9bb4-1820622e4d77.png', subtitle:"React Colouring PSA PWA", summary:'A colouring book application made with React and responsive, fillable SVG images. Works offline, user account creation and avatar settings.', tech:'React, React Color, GraphQL, Apollo, Heroku, ChakraUI, Mongoose '},
        { alt:'A pair of green 8th notes logo left of words Sputtle Music Battles', name: 'Sputtle Music App', deploy:"https://music-battle-spotify.herokuapp.com/", link: 'https://github.com/azuryte5/music-battle-spotify', image:'https://user-images.githubusercontent.com/85147307/149671331-4c47a551-9024-4890-9f69-c198e5403845.png', subtitle:"Spotify API Music Battle MVC", summary:'A Spotify music battle app. Sign in with demo account and see which song has the highest rating ', tech:'Handlebars, Spotify API, Bulma, Jquery/Ajax, Express.js, mysql2, Node, Heroku'},
        { alt:'NutriValue logo with the Nutri part written with lettering looking like vines', name: 'Nutrivalue', deploy:"https://azuryte5.github.io/Nutrition-Sustenance-Value/", link: 'https://github.com/azuryte5/Nutrition-Sustenance-Value', image:'https://user-images.githubusercontent.com/85147307/156245560-f1b4cc0c-f34e-4ea3-89cd-53bb70318622.png', subtitle:"Front End Recipe and Map API", summary:'A recipe search with health restrictions and cuisine types in mind. Use the map api to locate nearby food markets', tech:'HTML/CSS, Bulma, Javascript, Jquery, Edamam API, Mapbox API, Chosen plugin'},
        { alt:'Brick wall with characters Ralph and Vanellope emerging from broken bricks on the right ', name: 'Tech it Ralph', deploy:"https://polar-sierra-45467.herokuapp.com/", link: 'https://github.com/azuryte5/Tech-It-Ralph', image:'https://user-images.githubusercontent.com/85147307/156245893-cd472e27-c20b-43d8-88da-608e989050f0.png', subtitle:"MVC Tech forum with user Auth", summary:'Forum website made for characters of Wreck-it Ralph. Posts and comments with a user account', tech:'Handlebars, Bulma, Mysql2, Heroku, Insomnia, Google font, Node'},
        { alt:'Triple blue arrow with fallout lore caps infront. Lete', name: 'Vault-tec PWA', deploy:"https://vault-tec-pwa.herokuapp.com/", link: 'https://github.com/azuryte5/vault-tec-PWA', image:'https://user-images.githubusercontent.com/85147307/156247653-0137a60a-c3ee-42cb-93ba-296c9d64917e.png', subtitle:"Budget tracking progressive web application ", summary:'A budget tracking app with progressive web application for offline function. Inspired by Fallout lore', tech:'HTML, CSS, Mongo, PWA, Express, Node, Javascript'},
        { alt:'web page of 5 cards centered in middle screen. each card has a name, role and contact links', name: 'Art of Recruiter Programming', deploy:"https://watch.screencastify.com/v/YOPYRYz2gPMBQIwlur3i", link: 'https://github.com/azuryte5/art-of-recruiter-programming', image:'https://user-images.githubusercontent.com/85147307/149671175-acf4f25d-5ada-4077-9744-4c518a4fe9fe.png', subtitle:"OOP inquirer roster page generation", summary:'Inquirer questions generates a web page for a team roster of students, engineers and manager', tech:'Inquirer, Jest, Node, Bulma'},
        { alt:'Image of 2 vscode. Showing sequelize tables and schema', name: 'Deep Space Manager', deploy:"https://watch.screencastify.com/v/zBSdIeIjVO7j8RvXqgW0", link: 'https://github.com/azuryte5/deep-space-manager', image:'https://user-images.githubusercontent.com/85147307/149609664-94b7ab92-7909-43f3-9f91-da445f24d2fd.png', subtitle:"Back End Sequelize", summary:'Backend sequelize tables of a staff directory for a starbase. Add, update, delete employees, jobs, and reporting managers', tech:'Sequelize, mysql, Inquirer, console.table '},

]    
    return (
    <>
    {projectList.map(project => {
    return (
    <WrapItem bg='#3b83d0' key={project.name} borderRadius="20px" boxShadow='dark-lg' >
    <VStack w="23rem" align='left' paddingLeft={1}>
        <Image src={project.image} alt={project.alt} objectFit='contain' p={8} h='250px' objectPosition='center'/>
            <Text fontSize='3xl' align='left'>{project.name}</Text>
            <Tag w='75%' bg={'#CDEDF6'} fontSize='xl' align='left'>{project.subtitle}</Tag>
            <Text w='95%' fontSize='md' bg={'#CDEDF6'} align='left' borderRadius="5px" p={1}>Tech used: {project.tech}</Text>
            <Text fontWeight='500' p={4} align='left'>{project.summary}</Text>
            <HStack p={4} spacing='2rem'>
            <Link href={project.deploy} paddingY={3} paddingX={6} color={'black'} bg={'#ffb833'} target='_blank' _hover={{ color: 'black', bg:'#FACF7E' }} borderRadius="10px" fontSize={'xl'}
            boxShadow='dark-lg'>Deployed App</Link>
            <Link href={project.link} paddingY={3} paddingX={6} color={'black'} bg={'#ffb833'} target='_blank'_hover={{ color: '#413C58', bg:'#FACF7E' }}borderRadius="10px" fontSize={'xl'}
            boxShadow='dark-lg'>GitHub</Link>
            </HStack>
    </VStack>
    </WrapItem>
    )})
    }
    </>
    )
}


export default Project;