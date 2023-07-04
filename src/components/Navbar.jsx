import React, { useEffect, useState } from 'react'
import {FaRegLightbulb, FaLightbulb} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'


const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const dispatch = useDispatch();
  useEffect(()=>{
    const root = document.getElementById('root');
    if(darkTheme){
      root.style.backgroundColor = "#000";
      root.style.color = '#fff';
    }else{
      root.style.backgroundColor = "#fff";
      root.style.color = '#000';
    }
  },[darkTheme])
  return (
    <div className='flex items-center justify-between px-3 h-24'>
      <div className='text-2xl font-bold tracking-wider'>React Ecommerce</div>
      <div className='flex items-center space-x-4'>
        <input className='border p-3 outline-none rounded-lg text-black' placeholder='Search'></input>
        <div onClick={() => setDarkTheme(!darkTheme)}>
          <FaRegLightbulb size={25} className='cursor-pointer'/>
        </div>
        <div className='relative'>
          <AiOutlineShoppingCart size={30} className='cursor-pointer' onClick={() => dispatch({type:'DRAWER', payload: true})}/>
          <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'>5</span>
        </div>
      </div>

    </div>
  )
}

export default Navbar