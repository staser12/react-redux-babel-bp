"use strict";

import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState)
}

function addItem(state, text) {
  let arrKeys = state.keySeq().toArray()
  let newId = arrKeys.reduce((maxId, key) => Math.max(key, maxId), -1) + 1

  let item = {
    id: newId,
    text: text
  }

  return state.set(item.id, item)
}

function deleteItem(state, item) {
  return state.delete(item.id)
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'ADD_ITEM':
      return addItem(state, action.text)
    case 'DELETE_ITEM':
      console.log('deleteItem was called!')
      return deleteItem(state, action.item)
    default:
      return state
  }
}