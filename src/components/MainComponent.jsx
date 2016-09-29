import React from 'react';
import NewComponent from './NewComponent';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NewComponent/>
    );
  }
}

export default MainComponent;