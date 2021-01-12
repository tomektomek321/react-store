import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../_actions/productActions';
import './ModalHook.scss'

export default function ModalHook(props) {

    const id = props.match.params.id;

    const dispatch = useDispatch();




    const productDetails = useSelector((state) => state.productDetails);

    const {/*loading, error, */product} = productDetails;

    useEffect(() => {

        dispatch(detailsProduct(id));
        console.log(productDetails);
    // eslint-disable-next-line
    }, [dispatch, id]);

    const add = () => {
        props.history.push(`/cart/${id}?qty=1`);
    }


    return (
        <div className="modalHook">
            x
            {console.log(product) }

             { product ? (
                    <div>jest prod
                        <input onClick={add} type="button" value="add" />
                    </div>
             ) : (
                 <div>noprod</div>

             )}
        </div>
    )
}
