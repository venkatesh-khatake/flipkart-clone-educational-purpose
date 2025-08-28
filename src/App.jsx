import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import PosterScroll from './components/PosterScroll'
import CardList from './components/CardList'
import FlightBooking from './components/FlightBooking'



function App() {

  return (
    <>
      <Header/>
      <CategoryList/>
      <PosterScroll/>
      <div className="container">
        <CardList title={"Best of Electronics"}/>
        <FlightBooking/>
      </div>
    </>
  )
}

export default App
