import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import PosterScroll from './components/PosterScroll'
import CardList from './components/CardList'



function App() {

  return (
    <>
      <Header/>
      <CategoryList/>
      <PosterScroll/>
      <CardList title={"Best of Electronics"}/>
    </>
  )
}

export default App
