import React from 'react'
import ListItem from './ListItem'

const List = () => {
  const tasks = [
    { id: 1, title: 'To drink coffee', done: true, important: true },
    { id: 2, title: 'To wash car', done: false, important: false },
    { id: 3, title: 'To do app', done: true, important: false },
  ]

  const styles = {
    color: "black",
    fontWeight: "normal"
  }



  const items = tasks.map((item) => (
    <ListItem key={item.id} item={item} />
  ))

  return (
    <ul className="list-group todo-list">
      {items}
    </ul>
  )
}

export default List