import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddTask() {
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [status, setStatus] = useState('pending')

  const nav = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newTask = {
      title,
      description: des,
      status,
    }

    try {
      // Adjust the URL to your server endpoint
      const response = await axios.post('http://localhost:8000/tasks', newTask)
      console.log('Task added:', response.data)
      nav('/')
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  return (
    <div className="px-[30px] py-[30px] ">
      <h1 className="text-red-600 font-medium text-[30px] px-[20px]">
        Add new Task
      </h1>
      <form
        onSubmit={handleSubmit}
        className="gap-[20px] py-[20px] px-[20px]  w-[600px] border  ">
        <div className="border px-[10px] py-[10px] flex gap-[30px]">
          <label className="self-center font-mono">Title </label>
          <input
            className="bg-gray-100 px-[10px] py-[5px] focus:outline-none rounded-md w-full"
            placeholder="enter title"
            type="text"
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
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-tr from-violet-600 to-sky-700 px-[30px] py-[5px] text-white font-medium rounded-md mt-[20px] w-full">
          Add Task
        </button>
      </form>
    </div>
  )
}
