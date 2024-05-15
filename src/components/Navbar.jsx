import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex justify-between bg-gradient-to-tr from-violet-600 to-sky-700 py-[8px] px-[20px]">
      <Link to="/">
        <h1 className="text-white font-bold text-[30px]">Task Manager</h1>
      </Link>
      <div className="flex text-white font-medium space-x-[30px] self-center">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/add-task">
          <h1>Add task</h1>
        </Link>
      </div>
    </div>
  )
}
