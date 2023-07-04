import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProduct } from '../redux/actions/productsActions';
import { AiOutlineHeart, AiOutlineStar, AiOutlineTag, AiOutlineClockCircle } from 'react-icons/ai';
import { FaMinus, FaPlus, FaTruck } from 'react-icons/fa';

const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.products)

  const [count, setCount] = useState(0);

  const decrement = () => {
    count > 0 && setCount(count-1)
  }
  const increment = () => {
    count < 10 && setCount(count+1)
  }

  useEffect(()=>{
    dispatch(getProduct(id))
  },[dispatch])

  return (
    <div className='w-full flex justify-center space-x-10 mt-10'>
      <img className="w-1/4 object-cover" src={product?.image} alt={product?.title}/>
      <div className='w-3/4 space-y-4'>
        <div className='font-bold text-2xl'>{product?.title}</div>
        <div className='opacity-80 text-sm border-b-2 pb-2'>Product Code: {product?.id}</div>
        <div className=''>{product?.description}</div>
        <div className='opacity-80 flex items-center'><AiOutlineStar className='mr-2'/> {product?.rating?.rate}/5 ({product?.rating?.count})</div>
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
          <button className='p-3 w-full bg-green-500 rounded-lg text-white text-lg'>Add to Cart</button>
          <AiOutlineHeart title="Add to favorites" className='cursor-pointer p-3 w-20 bg-gray-400 rounded-lg text-white text-lg' size={55}/>
        </div>
      </div>
    </div>
  )
}

export default Detail