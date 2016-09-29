"use strict";

import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState)
}

function addItem(state, item) {
  return state.set(item.id, item)
}

function deleteItem(state, item) {
  return state.delete(item.id)
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'ADD_ITEM':
      return addItem(state, action.item);
    case 'DELETE_ITEM':
      return deleteItem(state, action.item);
  }

  return state;
}