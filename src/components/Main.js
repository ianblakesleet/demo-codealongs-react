import React, { useEffect, useState } from 'react'
import ListDisplay from './ListDisplay'
import { useFormik } from 'formik'
import axios from 'axios'

const Main = () => {
  const [allCategories, setAllCategories] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/getCategories').then(res => {
      setAllCategories(res.data)
    })
    axios.get('http://localhost:4000/api/getAllTasks').then(res => {
      setList(res.data)
    })
  }, [])

  let catOptions = allCategories.map((cat, index) => {
    return <option value={cat.category_id}>{cat.title}</option>
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      category: null,
    },
    onSubmit: values => {
      axios
        .post('http://localhost:4000/api/getCategories', values)
        .then(res => {
          console.log(res.data)
        })
      console.log(values)
    },
  })
  //use names to assign values to formik
  return (
    <div id="main">
      <form onSubmit={formik.handleSubmit} id="item-form">
        <input
          name="name"
          type="text"
          placeholder="task"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          name="description"
          type="text"
          placeholder="Describe your Task"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <option defaultValue disabled select>
            Category
          </option>
          {catOptions}
          {/* <option value="chores">chores</option>
          <option value="errands">errands</option>
          <option value="work">work</option> */}
        </select>
        <button type="submit">Add</button>
      </form>
      <ListDisplay list={list} setList={setList} />
    </div>
  )
}

export default Main
