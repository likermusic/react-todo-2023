import React, { useState } from 'react'
// import React from 'react'

import ListItem from './ListItem'

const List = ({ tasks, onImportant, onDone, onDelete }) => {

  const styles = {
    color: "black",
    fontWeight: "normal"
  }


  // const items = tasks.map((item) => (
  //   <ListItem key={item.id} item={item} />
  // ))
  // let [count, setCount] = useState(0);

  const items = tasks.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      onDelete={(id) => onDelete(id)}
      onDone={(id) => onDone(id)}
      onImportant={(id) => onImportant(id)}
    // onDeleteItem={(id) => deleteItemHandler()}
    // onDeleteItem={deleteItemHandler}
    />
  ))

  // const add = () => {
  //   let newCount = count + 1;
  //   setCount(newCount);
  // }

  // let number = count;
  // console.log('count:' + number);


  return (
    <ul className="list-group todo-list">
      {items}
    </ul>
  )
}

export default List