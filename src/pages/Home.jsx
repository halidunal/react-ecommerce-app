import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productsActions';
import Product from '../components/Product';

const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products)
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
    <div className='flex flex-wrap justify-center'>
        {
            products && products.map((product, key) => (
                <Product key={key} product={product}/>
            ))
        }
    </div>
  )
}

export default Home