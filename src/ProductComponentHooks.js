
import React, { useEffect, useState } from 'react'
//import Product from './Product'
//import { useDispatch, useSelector } from 'react-redux'
import { storeProducts } from './TodoDB'
//import { listProducts } from './_actions/productActions';
import "./ToDoComponent.scss";
import ProductFunc from './ProductFunc';


export default function ProductComponentHooks() {

    //const dispatch = useDispatch();

    //const productList = useSelector((state) => state.productList);

    //const { loading, error, products} = productList;

    const [products, setProducts] = useState([]);


    /*const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);*/


    useEffect(() => {
        setProducts(storeProducts);
        //dispatch(listProducts());
    // eslint-disable-next-line
    }, []);


    /*useEffect(() => {
        const fetchData = async () => {

            try {
                setLoading(true);
                const res = await axios.get('/api/products');
                console.log(res);
                setLoading(false);
                setProducts(res.data);
            } catch (err) {
                setError(err.message);
                setLoading(false);

            }


        };

        fetchData();
    }, [])*/




    return (
        <div className="container productsContainer">
            {products.map((product, index) => {
                return <ProductFunc key={index} product={product} />
            })}
        </div>


        // <div>
        //     {loading ? (

        //             <div>loading..</div>

        //         ) : error ? (
        //             {error}

        //         ) : (

        //             products.map((product, index) => {
        //                 return <Product key={index} product={product} />
        //             })

        //         )
        //     }

        // </div>
    )
}
