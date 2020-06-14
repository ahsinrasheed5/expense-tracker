import React from 'react';
import Cars from './Cars';

const ProductList = () => (
    <div className="product-list">
        <h2>Product list:</h2>
        <Cars />
        {/* Other potential product categories which we will skip for this demo: */}
        {/* <Electronics /> */}
        {/* <Clothes /> */}
        {/* <Shoes /> */}
    </div>
);
// const productList = props => (
//     <div className="product-list">
//         <h2>product list:</h2>
//         <cars
//             cars= {props.cars}
//             incrementCarPrice= {props.incrementCarPrice}
//             decrementCarPrice = {props.decrementCarPrice}    
//         /> 
//     </div>
// );
export default productList;