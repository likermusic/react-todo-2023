import React, { useState } from 'react'
import ListItem from './ListItem'

const List = () => {

  const initialData = [
    { id: 1, title: 'To drink coffee', done: true, important: true },
    { id: 2, title: 'To wash car', done: true, important: false },
    { id: 3, title: 'To do app', done: true, important: false },
  ]

  // state = [];
  let [tasks, setTasks] = useState(initialData);

  const styles = {
    color: "black",
    fontWeight: "normal"
  }

  const clickHandler = (id) => {
    // const id = event.target.closest('.list-group-item').id;
    const ind = tasks.findIndex(item => {
      return item.id == id;
    })

    let newTasks = tasks;
    newTasks[ind].important = !newTasks[ind].important;
    setTasks(newTasks);
    console.log(newTasks);
  }

  const items = tasks.map((item) => (
    <li key={item.id} className="list-group-item">
      <span className={`todo-list-item ${item.done ? 'done' : ''} ${item.important ? 'important' : ''}`}>
        <span className="todo-list-item-label">{item.title}</span>
        <button onClick={() => clickHandler(item.id)} type="button" className="btn btn-outline-success btn-sm float-end">
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button"
          className="btn btn-outline-danger btn-sm float-end">
          <i className="fa fa-trash"></i>
        </button>
      </span>
    </li>

    // <ListItem key={item.id} item={item} />
  ))


  return (
    <ul className="list-group todo-list">
      {items}
      {/* <li onClick={test}>{text[0]}</li> */}
    </ul>
  )
}

export default List
