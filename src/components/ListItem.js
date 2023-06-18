import React, { useState } from 'react'

const ListItem = ({ item, initialData, onDeleteItem }) => {

  return (
    <li className="list-group-item">
      <span className={`todo-list-item ${item.done ? 'done' : ''} ${item.important ? 'important' : ''}`}>
        {/* <span onClick={() => doneHandler(item.id)} className="todo-list-item-label">{item.title}</span>
        <button onClick={() => importantHandler(item.id)} type="button" className="btn btn-outline-success btn-sm float-end">
          <i className="fa fa-exclamation"></i>
        </button> */}
        <button onClick={() => onDeleteItem(item.id)} type="button"
          className="btn btn-outline-danger btn-sm float-end">
          <i className="fa fa-trash"></i>
        </button>
      </span>
    </li>
  )
}

export default ListItem