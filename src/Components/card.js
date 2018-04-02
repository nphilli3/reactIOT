import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


const MyCard = (props) => {
  return (
    <div className="col-sm-2">
      <Card>
      <a href={props.link} id="cardlinkStyle">
        
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
        </CardBody>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        </a>
      </Card>
    </div>
  );
};

export default MyCard;