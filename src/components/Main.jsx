import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className="px-[20px] py-[10px]">
      <div className="flex gap-[10px] justify-between py-[20px]">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-9  self-center">
            <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
          </svg>
          <h1 className="text-[40px] font-medium text-gray-600 self-center">
            Tasks to complete..
          </h1>
        </div>
        <div className="  px-[30px] py-[10px] flex gap-[30px]">
          <Link to="/add-task">
            <h1 className="text-[20px] text-center text-violet-600 font-bold underline underline-offset-4 self-center">
              Add new Task
            </h1>
          </Link>
          <Link to="/add-task">
            <button className="bg-gradient-to-tr from-violet-600 to-sky-700 px-[30px] py-[5px] text-white font-medium rounded-md ">
              ADD
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
