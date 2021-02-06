import React from 'react'
import ProductColors from './ProductColors';
import './DetailsInfo.scss'
import { selectModalProduct } from '../_actions/modalAction';
import { useDispatch } from 'react-redux';

export const DetailsInfo = (props) => {
    const dispatch = useDispatch();

    function showDetails() {
        dispatch(selectModalProduct(props.id));
    }


    return (
        <div className="detailsInfo">

            <ProductColors />

            <div className="displayInfo info">
                <div className="name">Display</div>
                <div className="info--info">15.5cm / 6.1 Zoll</div>
            </div>
            <div className="procesorInfo info">
                <div className="name">Procesor</div>
                <div className="info--info">Exyson 850</div>
            </div>
            <div className="systemInfo info">
                <div className="name">System</div>
                <div className="info--info">Android 10, One UI Core 2.1</div>
            </div>
            <div className="showDetailsBtn" onClick={showDetails}>
                <div className="text">SZCZEGOLY</div>
            </div>
        </div>
    )
}
