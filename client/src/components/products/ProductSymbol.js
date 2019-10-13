import React from 'react'
import '../../styles/products/product-symbol.scss'

const ProductSymbol = (props) => {
    const { name, year } = props
    return (
        <>
        <div className="product-symbol-wrapper">
            <span className="symbol-color"></span>
            <p>{name}</p>
            </div>
            <span className="year">{year}</span>
        </>
    )
}

export default ProductSymbol;