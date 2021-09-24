import React from 'react';
import '../App.css';
import Image from '../images/img-1.jpg'

export default function Products() {
    return (
        <div className="products" style={{backgroundImage: `url(${Image})`}}>
            PRODUCTS
        </div>
    )
}
