import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions'

const Cart = () => {
  const dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.cart)

  const remove = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white opacity-90 p-3 pt-4'>
      <div className='flex items-center h-20 justify-between border-b-2'>
        <h1 className='text-2xl ml-2'>Cart</h1>
        <AiOutlineClose size={25} className='cursor-pointer' onClick={() => dispatch({type: 'DRAWER', payload: false})}/>
      </div>
      {
        cartItems?.map((product,key) => (
          <div key={key} className='h-28 flex items-center justify-between p-4 mt-5 space-x-2'>
            <img className='h-24 w-24 object-scale-down' src={product?.image} alt={product?.title}/>
            <div className='w-44'>
              <div className='font-bold text-sm'>{(product?.title).substring(0,40)}...</div>
              <div className='opacity-80 text-xs'>{product?.description.substring(0,45)}...</div>
              <div className='font-bold text-sm'>Quantity: {product?.quantity}</div>
            </div>
            <div className='font-bold text-lg'>{product?.price} USD</div>
            <button onClick={() => remove(product.id)} className='bg-red-500 w-20 p-2 text-white rounded-lg cursor pointer'>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart