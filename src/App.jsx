import { Outlet } from 'react-router-dom'
// src/index.js or App.js

import './App.css'
import Navbar from './components/Navbar'
import Footers from './components/Footers'


function App() {

  return (
    <>
    <Navbar/>
    <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary bg-sky-900'>
    <Outlet/>
    </main>
    <Footers/>
    </>
  )
}

export default App
