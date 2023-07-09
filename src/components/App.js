import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Search from './Search';
import List from './List';
import AddItem from './AddItem';


const App = () => {
  const initialData = [
    { id: 1, title: 'To drink coffee', done: true, important: true },
    { id: 2, title: 'To wash car', done: true, important: false },
    { id: 3, title: 'To do app', done: true, important: false },
  ]
  const [tasks, setTasks] = useState(initialData);
  //Перенести state Tasks из комп List
  // const [done, setDone] = useState(0);

  // const getTasksHandler = (tasks) => {
  //   // console.log(tasks);

  //   const count = tasks.reduce((count, item) => {
  //     if (item.done == true) {
  //       return count + 1
  //     } else {
  //       return count
  //     }
  //   }, 0)

  //   setDone(count);
  // }

  const importantHandler = (id) => {
    const ind = tasks.findIndex(item => {
      return item.id == id;
    })

    let newTasks = [...tasks];
    newTasks[ind].important = !newTasks[ind].important;
    setTasks(newTasks);
  }

  const doneHandler = (id) => {
    const ind = tasks.findIndex(item => {
      return item.id == id;
    });

    let newTasks = [...tasks];
    newTasks[ind].done = !newTasks[ind].done;
    setTasks(newTasks);
  }

  const deleteItemHandler = (id) => {
    const ind = tasks.findIndex(item => {
      return item.id == id;
    });

    let newTasks = [...tasks];
    newTasks.splice(ind, 1);
    setTasks(newTasks);
  }

  const done = tasks.reduce((count, item) => {
    if (item.done == true) {
      return count + 1
    } else {
      return count
    }
  }, 0)
  const todo = tasks.length - done;

  const addItemHandler = (title) => {
    alert(title)
  }

  return (
    <div className="todo-app">
      <Header todo={todo} done={done} />
      <Search />
      <List onDelete={(id) => deleteItemHandler(id)} onDone={(id) => doneHandler(id)} onImportant={(id) => importantHandler(id)} tasks={tasks} />
      <AddItem onAdd={(title) => addItemHandler(title)} />
    </div>
  );
}

export default App;

