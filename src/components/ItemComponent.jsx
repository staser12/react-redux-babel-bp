import React, { Component, PropTypes } from 'react'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text || 'new item'
    }

    // binding this to functions
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSave = this.handleSave.bind(this)
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
        <button onClick={() => deleteItem(item)}>Delete</button>
      </div>
    )
  }
}

export default Item