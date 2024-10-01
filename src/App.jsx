import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from './pages/Recipe'
import RecipeDetails from './pages/RecipeDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Recipe />} />
          <Route path='/:id' element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
