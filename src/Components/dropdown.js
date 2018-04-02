import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Row, Col } from 'reactstrap';
// import PopoverItem from './popover'

export default class Dropdown extends React.Component {
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
                <NavLink  href="">Team</NavLink>
              </NavItem>


              <NavItem id='navitem'>
                <NavLink href="">Current Projects</NavLink>
              </NavItem>

              <NavItem id='navitem'>
                <NavLink href="">Events</NavLink>
              </NavItem>

              <NavItem id='navitem'>
                <NavLink href="">Suggestion Box</NavLink>
              </NavItem>

              <NavItem id='navitem'>
                <NavLink href="">Temperature</NavLink>
              </NavItem>

              <NavItem id='navitem'>
                <NavLink href="">Robot</NavLink>
              </NavItem>

              <NavItem id='navitem'>
                <NavLink href="">Club Information</NavLink>
              </NavItem>

              <NavItem id='navitem'>
                <NavLink href="">Contact Us</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
