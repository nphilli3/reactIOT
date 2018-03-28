import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

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
          <NavbarBrand href="/" className="mr-auto">Hilliard IOT</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="mr-auto ">
            <Col sm={{ size: 2, order: 0, offset: 10 }}>
            <Row>
              <NavItem>
                <NavLink  href="">Team</NavLink>
              </NavItem>
            </Row>
            <Row>
              <NavItem>
                <NavLink className="float-right" href="">Current Projects</NavLink>
              </NavItem>
            </Row>
            <Row>
              <NavItem>
                <NavLink className="float-right" href="">Events</NavLink>
              </NavItem>
            </Row>
            <Row>
              <NavItem>
                <NavLink className="float-right" href="">Suggestion Box</NavLink>
              </NavItem>
            </Row>
            <Row>
              <NavItem>
                <NavLink className="float-right" href="">Temperature</NavLink>
              </NavItem>
            </Row>
            <Row>
              <NavItem>
                <NavLink className="float-right" href="">Robot</NavLink>
              </NavItem>
            </Row>
            <Row>
              <NavItem>
                <NavLink className="float-right" href="">Club Information</NavLink>
              </NavItem>
            </Row>
            <Row>
              <NavItem>
                <NavLink className="float-right" href="">Contact Us</NavLink>
              </NavItem>
            </Row>
              </Col>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
