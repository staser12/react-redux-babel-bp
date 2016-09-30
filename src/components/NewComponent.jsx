import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import ListComponent from './ListComponent'

import * as MyActions from '../action_creators'

class NewComponent extends React.Component {

  render() {
    return (
      <ListComponent items={this.props.items} actions={this.props.actions}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.valueSeq().toArray()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MyActions, dispatch)
  }
}

//export default NewComponent
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComponent)