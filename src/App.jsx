import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Connect from './pages/Connect';

import NavBar from './assets/layout/NavBar';

import ContextProvider from './ContextProvider';


import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextProvider>
        <BrowserRouter basename="/Portfolio/">
          <div className="main_layout">
            <div className="main_layout_top"><NavBar /></div>
            <div className="main_layout_middle">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/About' element={<About />} />
                <Route path='/Connect' element={<Connect />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
