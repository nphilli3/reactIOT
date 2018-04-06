
import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const ProjectCard = (props) => {
  return (
      <Card body>
        <CardTitle>{props.projectTitle}</CardTitle>
        <CardText>{props.projectText}</CardText>
        <Button>{props.buttonLabel}</Button>
      </Card>
  );
};

export default ProjectCard;