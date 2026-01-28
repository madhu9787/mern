import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import {useEffect,useState} from 'react'
const ProductDetails = () => {
  const[product,setProduct]=useState({})
   
    const{id}=useParams()
    useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data =>setProduct(data));
    },[])
    console.log(product);
    
  return (
    <div>
        <h1>Product Details</h1>
        <h2>{product.title}</h2>
        <p>Price:{product.price}</p>
        <p> Description{product.description}</p>
        <p>Category{product.category}</p>
    </div>

  )
}

export default ProductDetails