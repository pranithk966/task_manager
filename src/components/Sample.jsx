import axios from 'axios'
import React from 'react'

export default function Sample() {
  axios
    .get(`http://localhost:8000/names/` + 1)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  return <div></div>
}
