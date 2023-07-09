import React, { useState } from 'react'

const Search = ({ onFilter }) => {
  const [active, setActive] = useState(0);

  const btns = ['All', 'Active', 'Done'];


  const btnsOut = btns.map((el, ind) => (
    active == ind ?
      <button onClick={() => { setActive(ind); onFilter(active) }} key={ind} type="button" className="btn btn-info">{el}</button>
      :
      <button onClick={() => { setActive(ind); onFilter(active) }} key={ind} type="button" className="btn btn-outline-secondary">{el}</button>
  ));

  return (
    <div className="top-panel d-flex">
      <input type="text" placeholder="Type to search" className="form-control search-input" />
      <div className="btn-group">
        {btnsOut}
      </div>
    </div>
  )
}

export default Search