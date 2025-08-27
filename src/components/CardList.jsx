import React from 'react'
import './CardList.css';
import Card from './Card';
import Monitors from '../assets/monitors.webp';


const CardList = ({title}) => {
  return (
    <div className='cardList'>
     
     <div className="title">
        <h2>{title}</h2>
     </div>

     <div className="cards">
        <Card image = {Monitors} pName = "Monotors" pPrice = "6999"/>
        <Card image = {Monitors} pName = "Monotors" pPrice = "6999"/>
        <Card image = {Monitors} pName = "Monotors" pPrice = "6999"/>
        <Card image = {Monitors} pName = "Monotors" pPrice = "6999"/>
        <Card image = {Monitors} pName = "Monotors" pPrice = "6999"/>

     </div>

    </div>
  )
}

export default CardList
