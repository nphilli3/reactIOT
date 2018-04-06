// Import React and Reactstrap
import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const ContacUs = () => {
    return (
       <FormGroup>
       <Form action='submit'>
       <label htmlFor="suggestion">What would you like to tell us?</label>
          <Input type="email" name="email" id="contactEmail" placeholder="Your Email" />
          <Input type='textarea' rows="5" id="myMessage" placeholder ='Your Message'></Input>
          <div className='text-right' id='save'>
            <Button type="submit" formMethod="post" className="save">Save</Button>
          </div>
        </Form>
      </FormGroup>
    );
  }

export default ContacUs;