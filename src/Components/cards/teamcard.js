import React from 'react';
import { Card, CardImg, CardHeader } from 'reactstrap';


const TeamCard = (props) => {
  return (
    <div className="col-sm-2" id='myCard'>
      <Card>
      <a href={props.link} id="cardlinkStyle">
        <CardHeader>{props.title}</CardHeader>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        </a>
      </Card>
    </div>
  );
};

export default TeamCard;