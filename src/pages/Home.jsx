import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productsActions';
import Product from '../components/Product';
import { search as searchData } from '../redux/actions/searchActions';

const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products)
    const {search} = useSelector(state => state.search)

    useEffect(()=>{
        dispatch(getProducts())
        dispatch(searchData())
    },[dispatch])

    return (
    <div className='flex flex-wrap justify-center mt-10'>
        {
            search?.length > 0 ?
            search?.map((product, key) => (
                <Product key={key} product={product}/>
            ))
            :
            products && products.map((product, key) => (
                <Product key={key} product={product}/>
            ))
        }
    </div>
  )
}

export default Home