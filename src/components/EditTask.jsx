import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function EditTask() {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [status, setStatus] = useState('pending')
  const nav = useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:8000/tasks/' + id)
      .then((res) => {
        const task = res.data
        setTitle(task.title)
        setDes(task.description)
        setStatus(task.status)
      })
      .catch((error) => {
        console.error('Error fetching task:', error)
      })
  }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const updatedTask = {
      title,
      description: des,
      status,
    }

    try {
      const response = await axios.put(
        'http://localhost:8000/tasks/' + id,
        updatedTask
      )
      console.log('Task updated:', response.data)
      nav('/')
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  return (
    <div className="px-[30px] py-[30px]">
      <h1 className="text-violet-600 font-medium text-[30px] px-[20px]">
        Edit Task
      </h1>
      <form
        onSubmit={handleSubmit}
        className="gap-[20px] py-[20px] px-[20px]  w-[600px] border  ">
        <div className="border px-[10px] py-[10px] flex gap-[30px]">
          <label className="self-center font-mono">Title </label>
          <input
            className="bg-gray-100 px-[10px] py-[5px] focus:outline-none rounded-md w-full"
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="border px-[10px] py-[10px] flex gap-[30px]">
          <label className="self-center font-mono">Description </label>
          <textarea
            className="bg-gray-100 px-[10px] py-[5px] focus:outline-none rounded-md w-full"
            placeholder="enter description"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <div className="px-[10px] py-[10px]">
          <label className="font-mono pr-[5px]">Status :</label>
          <select
            className="text-red-800 focus:outline-none border-2 px-[10px] py-[5px] "
            value={status}
            onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-tr from-violet-600 to-sky-700 px-[30px] py-[5px] text-white font-medium rounded-md mt-[20px] w-full">
          Add Edited Task
        </button>
      </form>
    </div>
  )
}
