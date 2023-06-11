import React from 'react'

const ListItem = ({ item }) => {
  const clickHandler = () => {
    // document.querySelector(".todo-list-item").classList.toggle('important');
  }

  return (
    <li className="list-group-item">
      <span className={`todo-list-item ${item.done ? 'done' : ''} ${item.important ? 'important' : ''}`}>
        <span className="todo-list-item-label">{item.title}</span>
        <button onClick={clickHandler} type="button" className="btn btn-outline-success btn-sm float-end">
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button"
          className="btn btn-outline-danger btn-sm float-end">
          <i className="fa fa-trash"></i>
        </button>
      </span>
    </li>
  )
}

export default ListItem