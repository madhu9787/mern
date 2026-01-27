import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
     const products=[
        {id:1,name:"Laptop",price:"30000",description:"Acer laptop with 8th gen intel processor"},
        {id:2,name:"Mouse",price:"10000",description:"Wireless mouse with 2 years warrenty"},
        {id:3,name:"Mobile",price:"50000",description:"Samsung mobile with 6gb ram and 128gb storage"},
        {id:4,name:"Keyboard",price:"3000",description:"Mechanical keyboard with rgb lighting"},
    ]
    const{id}=useParams()
    const product=products.find((p)=>p.id===Number(id))
  return (
    <div>
        <h1>Product Details</h1>
        <h2>{product.name}</h2>
        <p>Price:{product.price}</p>
        <p>{product.description}</p>
    </div>

  )
}

export default ProductDetails