import React from 'react'
import './CategoryList.css';
import Category from './Category';

const CategoryList = () => {
  return (
    <div className='categoryList'>
      <Category image={"./public/minutes.webp"} name= "Minutes"/>
      <Category image={"./public/topOffers.webp"} name= "Top Offers"/>
      <Category image={"./public/mobiles.webp"} name= "Mobiles & Tablets"/>
      <Category image={"./public/tv.webp"} name= "TVs & Appliances"/>
      <Category image={"./public/electronics.webp"} name= "Electronics"/>
      <Category image={"./public/Fashion.webp"} name= "Fashion"/>
      <Category image={"./public/home$kitchen.webp"} name= "Homes & Kitechen"/>
      <Category image={"./public/toys.webp"} name= "Beauty & Toys"/>
      <Category image={"./public/furniture.webp"} name= "Furniture"/>
      <Category image={"./public/flightbook.webp"} name= "Flight Bookings"/>
      <Category image={"./public/grocery.webp"} name= "Grocery"/>
    </div>
  )
}

export default CategoryList
