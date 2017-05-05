import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/App/Navbar';
import imgHeader from './resources/img/header13.jpg'
import CardList  from './containers/Review/Card/CardList'
import Slideshow from './containers/Slideshow/Slideshow'

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
            'https://firebasestorage.googleapis.com/v0/b/movies-52a54.appspot.com/o/bh6.jpg?alt=media&token=6fb5022f-97cd-4bdf-b962-ad3f130f8fdc',
            'https://firebasestorage.googleapis.com/v0/b/movies-52a54.appspot.com/o/cmiuc.jpg?alt=media&token=459e8333-3635-4a2f-868b-7d5f5a581aca',
            'https://firebasestorage.googleapis.com/v0/b/movies-52a54.appspot.com/o/gotg1.jpg?alt=media&token=670b0219-0d35-4f69-b63a-154142e88736',
            'https://firebasestorage.googleapis.com/v0/b/movies-52a54.appspot.com/o/starwar1.jpg?alt=media&token=63252594-a93a-4713-89fd-1d35b99e51aa',
          ]}/>
        <div className="container">
          <CardList />
        </div>
      </div>
    )
  }
}

export default App;
