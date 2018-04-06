import React from 'react';
import ProjectCard from './cards/projectcard'



const projects = [
	{
		Title: 'Security',
		Description: 'Integrate home security with alexa and the hopper.',
		Leader: 'Leon Pennington'
	},{
		Title: 'Immersive',
		Description: 'Create an immersive lighting experience through pixel mapping technology.',
		Leader: 'RoDreko Steward'
	},{
		Title: 'Smart Fence',
		Description: 'Integrate electric fences with IOT to notify of problems in the circuit.',
		Leader: 'Matt Bunfill'
	}
]

const CurrentProjects = (props) =>{
	return(
		<div>
			<ProjectCard 
				projectTitle={projects[0].Title}
				projectText={projects[0].Description}
				buttonLabel={projects[0].Leader}
			></ProjectCard>
			<ProjectCard 
				projectTitle={projects[1].Title}
				projectText={projects[1].Description}
				buttonLabel={projects[1].Leader}
			></ProjectCard>
			<ProjectCard 
				projectTitle={projects[2].Title}
				projectText={projects[2].Description}
				buttonLabel={projects[2].Leader}
			></ProjectCard>
		</div>
		)
}
// const CurrentProjects = (props) =>{
// 	projects.forEach(function(projectItem){
// 	return(

// 		<ProjectCard 
// 		projectTitle={projectItem.Title}
// 		projectText={projectItem.Description}
// 		buttonLabel={projectItem.Leader}
// 		></ProjectCard>

// 		)
// 	})
// }
export default CurrentProjects