import React, { Component } from 'react'
// import {Header, NavBar} from './Components/header'
import { Row, Col } from 'reactstrap';
import Maincarousel from './Components/carousel'
import Dropdown from './Components/dropdown'
import Jumbo from './Components/jumbo'
import Options from'./Components/options'
import Footer from './Components/footer' 
import MyCard from './Components/card' 
import Teambuilder from './Components/teambuilder'
import Teamdropdown from './Components/teamdropdown'


import './App.css'


class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {

    return (
      <div className="App">
        <Dropdown/>
        <Jumbo/>
        <Teamdropdown/>
        <Options/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;

        // <Col className='col-lg-6 offset-3'>
        //   <Maincarousel/>
        // </Col>