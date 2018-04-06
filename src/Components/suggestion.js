// Import React and Reactstrap
import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Suggestions = () => {
    return (
      <FormGroup>
        <Form action='submit'>
          <label for="suggestion">Tell us how we can improve the center, all suggestions are welcome!</label>
          <Input type='textarea' rows="5" id="suggestion"></Input>
          <div className='text-right' id='save'>
            <Button type="submit" formmethod="post" class="save">Save</Button>
          </div>
        </Form>
      </FormGroup>
    );
  }

export default Suggestions;
