import React from 'react'

const Product = ({product}) => {
  return (
    <div 
        className='hover:border-gray-400 w-1/5 h-[370px] border rounded-lg m-2 flex flex-col items-center p-2 space-y-2 cursor-pointer'
        onClick={()=> window.location = `detail/${product.id}`}
    > 
        <img className='h-32 object-cover mt-2' src={product?.image} alt={product?.title} />
        <div className='font-bold h-16 mt-2 text-center' title={product?.title}>{(product?.title).substring(0 ,55)} ...</div>
        <div className='opacity-80 text-sm text-center'>{(product?.description).substring(0 ,60)} ...</div>
        <div className='font-bold text-lg'>{product?.price} TL</div>
        <button onClick={() => {}} className='bg-green-500 w-full p-2 rounded-lg text-white z-1'>Add to Cart</button>
    </div>
  )
}

export default Product