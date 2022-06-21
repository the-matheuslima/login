import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AppProvider from "./context/AppProvider"
import Login from './Pages/Login/Login';
import Home from './Pages/Home/home'
import { AuthContext } from './context/AuthContext';

function App() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    console.log(authenticated)

    if (loading) {
      return <h1>Loading..</h1>
    }

    if (!authenticated) {
      return <Navigate to="/login" />
    }


    return children
  }
  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Private><Home /></Private>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  )
}

export default App
