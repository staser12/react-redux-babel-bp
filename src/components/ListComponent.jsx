'use strict'

import React, { Component, PropTypes } from 'react'

import ItemComponent from './ItemComponent';

export default class ListComponent extends Component {

  render() {
    const items = this.props.items

    return (
      <div>
        <ul>
          {items.map(item =>
            <ItemComponent key={item.id} item={item} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </div>
    )
  }
}