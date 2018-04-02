import React, { Component } from 'react'
import Elija from '../images/Elija.jpeg'
import Don from '../images/Don.jpeg'
import RoDreko from '../images/RoDreko.jpeg'
import Nate from '../images/Nate.jpeg'
import Willie from '../images/Willie.jpeg'
import Matt from '../images/matt.jpeg'

import MyCard from './card' 
import { Row, Col } from 'reactstrap';


const teambuilder = (props) => {
	return(
	  <div>
		<Row>
          <MyCard image={Elija} title='Elija Blosser'/>
          <MyCard image={Don} title='Don Smoyer'/>
          <MyCard image={RoDreko} title='RoDreko Steward'/>
          <MyCard image={Nate} title='Nathanel Phillips'/>
        </Row>
        <Row>
          <MyCard image={Willie} title='Willie'/>
          <MyCard image={Matt} title='Matt Bunfill'/>
        </Row>
      </div>
	)
}



export default teambuilder