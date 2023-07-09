import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

const AddItem = ({ onAdd }) => {
  const [value, setValue] = useState('');
  const onAddI = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
    console.log(value);

  }
  return (
    <div className="item-add-form d-flex">
      <input onChange={(e) => onAddI(e)} id="addTitle" type="text" className="form-control" placeholder="What needs to be done" value={value} />
      <button className="btn btn-outline-secondary col-3">Add Item</button>
    </div>
  )
}

export default AddItem