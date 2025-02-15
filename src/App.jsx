import React, {children,useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link,Navigate } from 'react-router'
import Home from './components/Home'
import Login from './components/Login'
import Products from './components/Products'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


const App = () => {
  
  const [isAuthenticated,setisAuthenticated]= useState(false)
  const handleLogin =()=>{
    setisAuthenticated(true)
  }

  const handleLogout=()=>{
    setisAuthenticated(false)
  }

    return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow-sm pb-4'>
        <div className='container-fluid'>
        <span className="navbar-brand">
            <i className="fas fa-laptop-house"></i> TechStore
          </span>
          
          <ul className='navbar-nav d-flex justify-content-around w-100'>
            <li className='nav-item'>
                <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/products">Products</Link>
            </li>
            <li>
            {!isAuthenticated?(
              <Link className='nav-link' to="/login">Login</Link>
            ):(
              <button onClick={handleLogout} className='nav-link'>Logout</button>
            )}
            </li>
          </ul>
        </div>
      </nav>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route 
          path="/products" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Products />
           </ProtectedRoute>
         }
        />
      </Routes>

    </Router>
  )
  function ProtectedRoute({isAuthenticated,children}){
    return isAuthenticated?children: <Navigate to="/login"/>
  }
}

export default App


