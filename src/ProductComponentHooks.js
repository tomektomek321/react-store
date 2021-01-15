
import React from 'react'
import { useSelector } from 'react-redux'
import "./ToDoComponent.scss";
import ProductFunc from './product/ProductFunc';


export default function ProductComponentHooks() {


    const productList = useSelector((state) => state.productList);

    const filters = useSelector((state) => state.filters);


    let tempProd = [...productList];
    if(filters.company !== 'all') {
        tempProd = tempProd.filter(item => {return item.company === filters.company});
    }

    if (filters.guaranty === true) {
        tempProd = tempProd.filter(room => room.guaranty === true);
    }

    if (filters.guaranty === false) {
        tempProd = tempProd.filter(room => room.guaranty === false);
    }

    tempProd = tempProd.filter(room => room.price <= filters.price);



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
            {tempProd.map((product, index) => {
                return <ProductFunc key={index} product={product} />
            })}
        </div>

    )
}
