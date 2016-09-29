import React, { Component, PropTypes } from 'react'

export default class Item extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    text: this.props.text || 'new item'
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.handleSave(text)
    }
  }

  handleSave(text) {
    console.log('do nothing for now...');
  }

  render() {
    const { item, deleteItem } = this.props

    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          autoFocus="true"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit} />
        <button onClick={() => deleteItem(item.id)} />
      </div>
    )
  }
}

Item.state