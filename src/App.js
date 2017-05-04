import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/App/Navbar';
import imgHeader from './resources/img/header13.jpg'
import { Card } from './components/Review/Card/Card'
import Slideshow  from './containers/Slideshow/Slideshow'

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
    return (
      <div>
        <header><Navbar /></header>
        <img className="img-responsive sr-only" src={imgHeader} />
        <Slideshow 
          imgSet={[
            'https://www.w3schools.com/w3css/img_nature_wide.jpg',
            'https://www.w3schools.com/w3css/img_fjords_wide.jpg',
            'https://www.w3schools.com/w3css/img_mountains_wide.jpg',
          ]}/>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
