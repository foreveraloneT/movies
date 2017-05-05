import React, { Component } from 'react';
import { Navbar } from './Navbar';
import CardList  from '../../containers/Review/Card/CardList'
import Slideshow from '../../containers/Slideshow/Slideshow'

class App extends Component {
  render() {

    return (
      <div>
        <header><Navbar /></header>
        <div>
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
