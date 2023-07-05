import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProduct } from '../redux/actions/productsActions';
import { addToCart } from '../redux/actions/cartActions';

import { AiOutlineHeart, AiOutlineTag, AiOutlineClockCircle } from 'react-icons/ai';
import { FaMinus, FaPlus, FaTruck } from 'react-icons/fa';
import Stars from '../components/Stars';

const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.products)

  const [count, setCount] = useState(1);

  const decrement = () => {
    count > 0 && setCount(count-1)
  }
  const increment = () => {
    count < 10 && setCount(count+1)
  }

  const add = () => {
    dispatch(addToCart(id, count))
  }

  useEffect(()=>{
    dispatch(getProduct(id))
  },[dispatch])

  return (
    <div className='w-full flex justify-center space-x-10 mt-10'>
      <div className='w-1/4 border rounded-lg p-3'>
        <img className="object-cover rounded-lg" src={product?.image} alt={product?.title}/>
      </div>
      <div className='w-3/4 space-y-4'>
        <div className='font-bold text-2xl'>{product?.title}</div>
        <div className='opacity-80 flex items-center space-x-1'>
          <span className='font-bold'>{product?.rating?.rate}</span>
          <Stars rate={product?.rating?.rate} className='mr-2'/>
          <span>({product?.rating?.count})</span>
        </div>
        <div className='opacity-80 text-sm border-b-2 pb-2'>Product Code: {product?.id}</div>
        <div className=''>{product?.description}</div>
        {/* <div className='opacity-80'>{ !product.stock ? <span>Out of stock</span> : product.stock > 1 ? <span>Last {product?.stock} items in stock</span> : <span>Last item in stock</span> }</div> */}
        <div className='opacity-80 flex items-center'><AiOutlineTag className='mr-2'/>{product?.category}</div>
        <div className='opacity-80 flex items-center'><AiOutlineClockCircle className='mr-2'/>Ships in 1 day</div>
        <div className='opacity-80 flex items-center'><FaTruck className='mr-2'/>Free shipping</div>
        <div className='font-bold text-2xl'>Price: {product?.price} USD</div>
        <div className='flex space-x-5'>
          <div className='flex items-center space-x-2'>
            <FaMinus onClick={decrement} className='cursor-pointer border rounded-full p-2' size={35}/>
            <span className='text-2xl font-bold border rounded-full w-20 text-center'>{count}</span>
            <FaPlus onClick={increment} className='cursor-pointer border rounded-full p-2' size={35}/>
          </div>
          <button onClick={add} className='p-3 w-full bg-green-500 rounded-lg text-white text-lg'>Add to Cart</button>
          <AiOutlineHeart title="Add to favorites" className='cursor-pointer p-3 w-20 bg-gray-400 rounded-lg text-white text-lg' size={55}/>
        </div>
      </div>
    </div>
  )
}

export default Detail