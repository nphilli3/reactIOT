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
const links = {
  ElijaLink: 'https://intranet.global.dish.com/employeeSearchDetails/2892057/',
  Donlink: 'https://intranet.global.dish.com/employeeSearchDetails/285073/',
  RoDrekolink: 'https://intranet.global.dish.com/employeeSearchDetails/532726/',
  Natelink: 'https://intranet.global.dish.com/employeeSearchDetails/1693303/',
  Willielink: 'https://intranet.global.dish.com/employeeSearchDetails/373709/',
  Mattlink: 'https://intranet.global.dish.com/employeeSearchDetails/2848139/',
  Timlink: 'https://intranet.global.dish.com/employeeSearchDetails/2758043/'
}

const Team = (props) =>{
  return (
    <Row>
      <TeamCard image={Elija} title='Elija' link={links.ElijaLink}/>
      <TeamCard image={Don} title='Don' link={links.Donlink}/>
      <TeamCard image={RoDreko} title='RoDreko'link={links.RoDrekolink}/>
      <TeamCard image={Nate} title='Nate'link={links.Natelink}/>
      <TeamCard image={Willie} title='Willie' link={links.Willielink}/>
      <TeamCard image={Matt} title='Matt' link={links.Mattlink}/>
      <TeamCard image={Tim} title='Tim' link={links.Timlink}/>
    </Row>
  );
}

export default Team;
