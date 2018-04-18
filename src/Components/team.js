// Import React and Reactstrap
import React from 'react';
import { Row } from 'reactstrap';
// Import Images
import Elija from '../images/Elija.jpeg'
import Don from '../images/Don.jpeg'
import RoDreko from '../images/RoDreko.jpeg'
import Nate from '../images/Nate.jpeg'
import Willie from '../images/Willie.jpeg'
import Matt from '../images/matt.jpeg'
import Tim from '../images/tim.jpeg'
// Import Custom Components
import TeamCard from './cards/teamcard' 



//Define class and toggle props
const teamMembers = [
  {
    name: 'Elija',
    link: 'https://intranet.global.dish.com/employeeSearchDetails/2892057/'
  },
  {
    name: 'Don',
    link: 'https://intranet.global.dish.com/employeeSearchDetails/285073/'
  },
  {
    name:'RoDreko',
    link: 'https://intranet.global.dish.com/employeeSearchDetails/532726/'
  },
  {
    name:'Nate',
    link: 'https://intranet.global.dish.com/employeeSearchDetails/1693303/'
  },
  {
    name:'Willie',
    link: 'https://intranet.global.dish.com/employeeSearchDetails/373709/'
  },
  {
    name: 'Matt',
    link: 'https://intranet.global.dish.com/employeeSearchDetails/2848139/'
  },
  {
    name:'Tim',
    link: 'https://intranet.global.dish.com/employeeSearchDetails/2758043/'
  }
]

const Team = (props) =>{
  return (
    <div>
    <Row>
    <h2 id='teamTitle'>Facilitators</h2>
    </Row>
    <Row>
      <TeamCard image={Elija} title={teamMembers[0].name} link={teamMembers[0].link}/>
      <TeamCard image={Nate} title={teamMembers[3].name}link={teamMembers[3].link}/>
    </Row>
    <Row>
    <h2 id='teamTitle'>IT</h2>
    </Row>
    <Row>
      <TeamCard image={Don} title={teamMembers[1].name} link={teamMembers[1].link}/>
      <TeamCard image={Willie} title={teamMembers[4].name} link={teamMembers[4].link}/>
      <TeamCard image={Tim} title={teamMembers[6].name} link={teamMembers[6].link}/>
    </Row>  
    <Row>
      <h2 id='teamTitle'>DDCM</h2>
    </Row>
    <Row>
      <TeamCard image={RoDreko} title={teamMembers[2].name}link={teamMembers[2].link}/>
      <TeamCard image={Matt} title={teamMembers[5].name} link={teamMembers[5].link}/>
    </Row>
    </div>
  );
}

export default Team;

