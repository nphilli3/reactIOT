// Import React and Reactstrap
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';

//Define class and toggle props
class Suggestdropdown extends Component {
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
      <Button id='suggestbutton' className="block" onClick={this.toggle}>Suggestions</Button>
        <Collapse isOpen={this.state.collapse}>
          <div class="form-group">
            <form action=''>
              <label htmlFor="suggestion" id='suggestion'>Tell us how we can improve the center, all suggestions are welcome!</label>
              <textarea className="form-control" rows="10" id="suggestiont"></textarea>
              <div className='text-right' id='save'>
                <button type="submit" formmethod="post" class="save">Save</button>
              </div>
            </form>
          </div>
        </Collapse>
      </div>
      
    );
  }
}

export default Suggestdropdown;