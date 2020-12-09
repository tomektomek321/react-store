
import React, { useEffect } from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from './_actions/productActions';



export default function ProductComponentHooks() {

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);

    const { loading, error, products} = productList;




    /*const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);*/


    useEffect(() => {

        dispatch(listProducts());
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
        <div>
            {loading ? (

                    <div>loading..</div>

                ) : error ? (
                    {error}

                ) : (

                    products.map(product => {
                        return <Product key={product.id} product={product} />
                    })

                )
            }

        </div>
    )
}
