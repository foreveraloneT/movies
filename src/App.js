import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import routes from './routes';


class App extends Component {
  render() {
    return (
      <Provider store={configureStore()} key='provider'>
        {routes()}
      </Provider>
    )
  }
}

export default App;
