import { useState, memo, useCallback } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

const Demo = memo(function({a}){
  console.log("hello")
  return <div>
    hi there {a}
  </div>
})

export default App
