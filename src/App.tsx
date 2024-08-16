import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from "./components/pages/Login"

function App() {
  return (
    <div className='app h-full'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Login />
    </div>
  )
}

export default App
