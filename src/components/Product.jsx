import React from 'react'
import Stars from './Stars'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'

const Product = ({product}) => {

  const dispatch = useDispatch()
  const add = (id) => {
    dispatch(addToCart(id,1))
  }
 
  return (
    <div 
        className='hover:border-gray-400  hover:scale-105 w-1/5 h-[400px] p-3 border rounded-lg m-2 space-y-2 cursor-pointer'
    >   
      <div className='flex flex-col items-center space-y-2' onClick={()=> window.location = `detail/${product.id}`}>
        <img className='h-32 object-cover mt-2' src={product?.image} alt={product?.title} />
        <div className='font-bold h-16 mt-2 text-center' title={product?.title}>{(product?.title).substring(0 ,55)} ...</div>
        <div className='opacity-80 text-sm text-center'>{(product?.description).substring(0 ,60)} ...</div>
        <div title={product?.rating.rate}>
          <Stars rate={product?.rating.rate}/>
        </div>
        <div className='font-bold text-lg'>{product?.price} USD</div>        
      </div>

      <button onClick={() => add(product.id)} className='hover:scale-105 bg-green-500 w-full p-2 rounded-lg text-white z-1'>Add to Cart</button>
    </div>
  )
}

export default Product