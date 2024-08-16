import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"

function App() {
  return (
    <div className='app h-full'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
