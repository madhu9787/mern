import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect,useState} from 'react'
const Products = () => {
    // const products=[
    //     {id:1,name:"Laptop",price:"30000"},
    //     {id:2,name:"Mouse",price:"10000"},
    //     {id:3,name:"Mobile",price:"50000"},
    //     {id:4,name:"Keyboard",price:"3000"},
    // ]
    const[products,setProducts]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data))
    },[])
  return (
    <div>
        <h1>Products</h1>
    {products.map((product)=>(
        <div key={product.id}>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <Link to={`/products/${product.id}`}>View Details</Link>

        </div>

    ))}
    </div>
  )
}


export default Products