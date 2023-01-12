import { wait } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
const baseURL = "https://fakestoreapi.com/products";

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(baseURL).then((response) => {
            setProducts(response.data);
            setLoading(false)
        });
    }, []);
    return (
        <div className='d-flex justify-content-center mt-5'>
            {
                loading ? <div class="text-center w-25">
                    <div class="spinner-border" role="status">

                    </div>
                </div> : <div className='container-fluid'>
                    <div className='row mx-auto'>

                        {
                            products.map((product) => {
                                return (
                                    <div className='col-md-4' key={product.id}>
                                        <ProductCard product={product}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }


        </div>
    )
}

export default Products