'use strict'

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function addItem(text) {
  return {
    type: 'ADD_ITEM',
    text
  }
}

export function deleteItem(item) {
  return {
    type: 'DELETE_ITEM',
    item
  }
}