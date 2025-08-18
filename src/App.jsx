import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import CategoryList from './components/CategoryList'
import PosterScroll from './components/PosterScroll'
import MobileList from './components/MobileList'



function App() {

  return (
    <>
      <Header/>
      <CategoryList/>
      <PosterScroll/>
      <MobileList/>
    </>
  )
}

export default App
