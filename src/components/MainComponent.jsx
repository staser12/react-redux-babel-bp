import React from 'react'
import NewComponent from './NewComponent'
import makeStore from '../store'
import {Provider} from 'react-redux'

export const store = makeStore()

class MainComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NewComponent/>
      </Provider>
    );
  }
}

export default MainComponent