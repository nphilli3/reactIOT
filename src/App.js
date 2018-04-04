import React, { Component } from 'react'
// import {Header, NavBar} from './Components/header'
import { Row, Col } from 'reactstrap';
import Maincarousel from './Components/carousel'
import Navdropdown from './Components/navdropdown'
import Header from './Components/header'
import Jumbo from './Components/jumbo'
import Options from'./Components/options'
import Footer from './Components/footer' 
import MyCard from './Components/card' 
import Mydropdown from './Components/mydropdown' 
import Teambuilder from './Components/teambuilder'
import Team from './Components/team'
import Suggestions from './Components/suggestion'


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
        <Navdropdown/>
        <Jumbo/>
        <Footer/>
      </div>
    );
  }
}

export default App;
