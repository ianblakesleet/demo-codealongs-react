import React, { useState } from 'react'
import Item from './Item'

const ListDisplay = props => {
  const { list, setList } = props
  const [selected, setSelected] = useState('')

  const listMapped = list
    .filter(item => {
      if (selected) return item.category === selected
      return item
    })
    .map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          id={index}
          setList={setList}
          list={list}
        />
      )
    })

  return (
    <div>
      <select onChange={e => setSelected(e.target.value)}>
        <option default selected></option>
        <option value="chores">chores</option>
        <option value="errands">errands</option>
        <option value="work">work</option>
      </select>
      {listMapped}
    </div>
  )
}

export default ListDisplay
