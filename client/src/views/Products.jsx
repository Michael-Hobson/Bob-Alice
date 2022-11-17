import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductTable from '../components/ProductTable';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
    const { cat } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then((res) =>{
            setProducts([...res.data])
        })
        .then((res) =>{
            if(products.length > 0 && cat){
                const filterProducts = products.filter(product => product.category === cat)
                setProducts([...filterProducts])
            }
        })
    }, [cat]);

    return (
        <div>
            <Navbar />
            {products.length > 1 && <ProductTable products={products} />}
        </div>
    )
}

export default Products