import { useState } from 'react'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
