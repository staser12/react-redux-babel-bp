'use strict'

import React, { Component, PropTypes } from 'react'

import ItemComponent from './ItemComponent';


export default class ListComponent extends Component {

  render() {
    const { items, actions } = this.props

    return (
      <div>
        <ul>
          {items.map(item =>
            <ItemComponent key={item.id} item={item} deleteItem={actions.deleteItem} />
          )}
        </ul>
        <button onClick={() => actions.addItem()}>Add</button>
      </div>
    )
  }
}