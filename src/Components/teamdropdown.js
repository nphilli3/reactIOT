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
class Teamdropdown extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
//set the toggle
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button id='teambutton' className="block" onClick={this.toggle}>Team</Button>
        <Collapse isOpen={this.state.collapse}>
          <div>
            <Row>
              <MyCard image={Elija} title='Elija Blosser' link='https://intranet.global.dish.com/employeeSearchDetails/2892057/'/>
              <MyCard image={Don} title='Don Smoyer' link='https://intranet.global.dish.com/employeeSearchDetails/285073/'/>
              <MyCard image={RoDreko} title='RoDreko Steward'link='https://intranet.global.dish.com/employeeSearchDetails/532726/'/>
              <MyCard image={Nate} title='Nathanel Phillips'link='https://intranet.global.dish.com/employeeSearchDetails/1693303/'/>
              <MyCard image={Willie} title='Willie' link='https://intranet.global.dish.com/employeeSearchDetails/373709/'/>
              <MyCard image={Matt} title='Matt Bunfill' link='https://intranet.global.dish.com/employeeSearchDetails/2848139/'/>
              <MyCard image={Tim} title='Tim Glass' link='https://intranet.global.dish.com/employeeSearchDetails/2758043/'/>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Teamdropdown;