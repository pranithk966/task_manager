import Home from './components/Home'
import Navbar from './components/Navbar'
import AddTask from './components/AddTask'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ViewTask from './components/ViewTask'
import Sample from './components/Sample'
import EditTask from './components/EditTask'

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details/:id" element={<ViewTask />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
        </Routes>
        {/* <Sample /> */}
      </div>
    </Router>
  )
}

export default App
