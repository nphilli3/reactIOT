// Import React and Reactstrap
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContacUs = () => {
    return (
       <FormGroup>
       <Form action='submit'>
       <label htmlFor="suggestion">What would you like to tell us?</label>
          <Input type="email" name="email" id="contactEmail" placeholder="Your Email" />
          <Input type='textarea' rows="10" id="myMessage" placeholder ='Your Message'></Input>
          <div className='text-right' id='save'>
            <button type="submit" formmethod="post" class="save">Save</button>
          </div>
        </Form>
      </FormGroup>
    );
  }

export default ContacUs;


<FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>