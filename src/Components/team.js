// Import React and Reactstrap
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';
// Import Images
import Elija from '../images/Elija.jpeg'
import Don from '../images/Don.jpeg'
import RoDreko from '../images/RoDreko.jpeg'
import Nate from '../images/Nate.jpeg'
import Willie from '../images/Willie.jpeg'
import Matt from '../images/matt.jpeg'
import Tim from '../images/tim.jpeg'
// Import Custom Components
import MyCard from './card' 



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
      <MyCard image={Elija} title='Elija' link={links.ElijaLink}/>
      <MyCard image={Don} title='Don' link={links.Donlink}/>
      <MyCard image={RoDreko} title='RoDreko'link={links.RoDrekolink}/>
      <MyCard image={Nate} title='Nate'link={links.Natelink}/>
      <MyCard image={Willie} title='Willie' link={links.Willielink}/>
      <MyCard image={Matt} title='Matt' link={links.Mattlink}/>
      <MyCard image={Tim} title='Tim' link={links.Timlink}/>
    </Row>
  );
}

export default Team;
