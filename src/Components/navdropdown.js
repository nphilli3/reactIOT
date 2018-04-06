import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Mydropdown from './mydropdown' 
import Team from './team'
import CurrentProjects from './currentprojects'
import Suggestions from './suggestion'
import ContactUs from './contactus'
// import PopoverItem from './popover'

export default class Navdropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


render(){
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-m2">Hilliard IOT</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              
              <NavItem id='navitem'>
                <NavLink>{<Mydropdown label='Team'>{<Team/>}</Mydropdown> }</NavLink>
              </NavItem>
              
              <NavItem id='navitem'>
                <NavLink>{<Mydropdown label='Club Info'></Mydropdown>}</NavLink>
              </NavItem>

              <NavItem id='navitem'>
                <NavLink>{<Mydropdown label='Current Projects'>{<CurrentProjects/>}</Mydropdown>}</NavLink>
              </NavItem>
             
              <NavItem id='navitem'>
                <NavLink>{<Mydropdown label='Events'></Mydropdown>}</NavLink>
              </NavItem>
             
              <NavItem id='navitem'>
                <NavLink>{<Mydropdown label='Suggestions'>{<Suggestions/>}</Mydropdown>}</NavLink>
              </NavItem>
             
              <NavItem id='navitem'>
                <NavLink>{<Mydropdown label='Contact Us'>{<ContactUs/>}</Mydropdown>}</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
