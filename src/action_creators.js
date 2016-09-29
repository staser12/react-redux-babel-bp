'use strict'

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export function deleteItem(item) {
  return {
    type: 'DELETE_ITEM',
    item
  }
}