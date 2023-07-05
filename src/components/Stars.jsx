import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Stars = ({rate}) => {
    const decimal = rate?.toString().slice(2,3)
    return (
        <div className='flex'>
            {
                [...Array(5).keys()].map((star, key) => (
                    Math.round(rate) > key && decimal > 7  ? <FaStar key={key}/> : Math.floor(rate) == key && decimal > 2 ? <FaStarHalfAlt key={key}/> : Math.round(rate) > key ? <FaStar key={key}/> : <FaRegStar key={key}/>
                ))
            }
        </div>
    )
}

export default Stars