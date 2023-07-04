import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProduct } from '../redux/actions/productsActions';
import { AiOutlineHeart } from 'react-icons/ai';

const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.products)
  useEffect(()=>{
    dispatch(getProduct(id))
  },[dispatch])
console.log(product)
  return (
    <div className='w-full flex justify-center space-x-10 mt-10'>
      <img className="w-1/4" src={product?.image} alt={product?.title}/>
      <div className='w-3/4 space-y-4'>
        <div className='font-bold text-2xl'>{product?.title}</div>
        <div className='opacity-80'>Rate: {product?.rating?.rate}/5 ({product?.rating?.count})</div>
        <div className='opacity-80'>{product?.description}</div>
        {/* <div className='opacity-80'>{ !product.stock ? <span>Out of stock</span> : product.stock > 1 ? <span>Last {product?.stock} items in stock</span> : <span>Last item in stock</span> }</div> */}
        <div className='opacity-80'>Category: {product?.category}</div>
        <div className='font-bold text-lg'>Price: {product?.price} USD</div>
        <div className='flex space-x-5'>
          <button className='p-3 w-full bg-green-500 rounded-lg text-white text-lg'>Add to Cart</button>
          <AiOutlineHeart title="Add to favorites" className='cursor-pointer p-3 bg-gray-400 rounded-lg text-white text-lg' size={55}/>
        </div>
      </div>
    </div>
  )
}

export default Detail