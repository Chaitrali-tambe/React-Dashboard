import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='main-div'>
          <Sidebar />
          <main style={{width: '100%'}}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<ProductPage />} />
              <Route path='/users' element={<UserPage />} />
            </Routes>
          </main>
        </div>



      </BrowserRouter>

    </>
  )
}

export default App
