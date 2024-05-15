import React, { useState } from 'react'
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

export default function Tasks() {
  const [data, setData] = useState([])
  axios
    .get('http://localhost:8000/tasks')
    .then((res) => {
      // console.log(res)
      setData(res.data)
    })
    .catch((err) => console.log(err))

  function deleteData(id) {
    axios
      .delete('http://localhost:8000/tasks/' + id)
      .then((res) => console.log('deleted task'))
      .catch((err) => console.log(err))
  }

  return (
    <div className="px-[20px] grid grid-cols-3 gap-[50px] py-[100px]">
      {data &&
        data.map((item) => (
          <div className="bg-gray-100 text-center shadow-xl" key={item.id}>
            <h1 className="text-[30px] font-medium py-[10px]">{item.title}</h1>
            <h1 className="text-[15px] font-medium py-[10px]">
              {item.description}
            </h1>
            <div className="flex place-content-center">
              {item.status === 'completed' ? (
                <svg
                  className="stroke-green-600 w-10"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 9.125C8.39746 9.125 9.125 8.39746 9.125 7.5C9.125 6.60254 8.39746 5.875 7.5 5.875C6.60254 5.875 5.875 6.60254 5.875 7.5C5.875 8.39746 6.60254 9.125 7.5 9.125ZM7.5 10.125C8.94975 10.125 10.125 8.94975 10.125 7.5C10.125 6.05025 8.94975 4.875 7.5 4.875C6.05025 4.875 4.875 6.05025 4.875 7.5C4.875 8.94975 6.05025 10.125 7.5 10.125Z"
                      fill="#f0efef"></path>{' '}
                  </g>
                </svg>
              ) : (
                <svg
                  className="stroke-red-600 w-10"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 9.125C8.39746 9.125 9.125 8.39746 9.125 7.5C9.125 6.60254 8.39746 5.875 7.5 5.875C6.60254 5.875 5.875 6.60254 5.875 7.5C5.875 8.39746 6.60254 9.125 7.5 9.125ZM7.5 10.125C8.94975 10.125 10.125 8.94975 10.125 7.5C10.125 6.05025 8.94975 4.875 7.5 4.875C6.05025 4.875 4.875 6.05025 4.875 7.5C4.875 8.94975 6.05025 10.125 7.5 10.125Z"
                      fill="#f0efef"></path>{' '}
                  </g>
                </svg>
              )}

              <h1 className="py-[10px] text-[15px] font-semibold">
                STATUS : {item.status}
              </h1>
            </div>

            <div className="flex place-content-center gap-[30px] py-[30px]">
              <Link to={`/details/${item.id}`}>
                <button className="flex gap-[10px] text-white bg-gradient-to-tr from-violet-600 to-sky-700 font-medium px-[10px] py-[5px] rounded-md">
                  View{' '}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
              <button
                onClick={() => deleteData(item.id)}
                className="flex gap-[10px] text-white bg-red-600 font-medium px-[10px] py-[5px] rounded-md">
                Delete{' '}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </span>
              </button>
              <Link to={`/edit-task/${item.id}`}>
                <button className="flex gap-[10px] text-white  bg-gradient-to-tr from-violet-600 to-sky-700 font-medium px-[10px] py-[5px] rounded-md ">
                  Edit{' '}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}
