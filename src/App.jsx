import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AppProvider from "./context/AppProvider"
import Login from './Pages/Login/Login';
import Home from './Pages/Home/home'

function App() {

  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  )
}

export default App
