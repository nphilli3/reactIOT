import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

const jumbo = (props) => {
  return (
      <Jumbotron>
    	<div className="container" id="jumbobutton">
      		<div>
        	<h2 id='iot'>IOT</h2>
    	</div>
    		<div>
      			<h3>Recruiting Ideas for the future</h3>
      			<a id="jumbobutton" className="btn btn-primary" align="center" href="#projects" role="button">See all</a>
    		</div>
  		</div>
    	
      </Jumbotron>
  )
}

export default jumbo