import React, { Component } from 'react'
// import {Header, NavBar} from './Components/header'
import Dropdown from './Components/dropdown'
import Jumbo from './Components/jumbo'
import Options from'./Components/options'
import Footer from './Components/footer'
import './App.css'


class App extends Component {
  // constructor(){
  //   super();
  //   this.state={

  //   }
  // }
  render() {

    return (
      <div className="App">
        <Dropdown />
          
        <Jumbo />
        <Options />
        <Footer />
        
      </div>
    );
  }
}

export default App;
