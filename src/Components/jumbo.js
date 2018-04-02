import React from 'react'
import { Jumbotron } from 'reactstrap';

const jumbo = (props) => {
  return (
      <Jumbotron className='myjumbotron' id='superjumbo'>
    	<div className="container" id="jumbobutton">
      		<div>
        	<h1 id='iot'>IOT</h1>
    	</div>
    		<div>
      			<h3>Recruiting Ideas for the future</h3>
      			<a id="jumbobutton" className="btn btn-secondary" align="center" href="#projects" role="button">Get Involved</a>
    		</div>
  		</div>
    	
      </Jumbotron>
  )
}

export default jumbo