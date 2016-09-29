import React from 'react';
import {connect} from 'react-redux';
import ListComponent from './ListComponent';
import {Provider} from 'react-redux';

class NewComponent extends React.Component {

  render() {
    return (
      <ListComponent />
    );
  }
}

export default NewComponent;