import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import CategoryList from './components/CategoryList'
import PosterScroll from './components/PosterScroll'



function App() {

  return (
    <>
      <Header/>
      <CategoryList/>
      <PosterScroll/>
    </>
  )
}

export default App
