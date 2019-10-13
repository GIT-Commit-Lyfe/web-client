import React from 'react'
import '../styles/home/promotion-header-large.scss'

const PromotionHeaderLarge = ({img}) => {
    return (
        <>
        <img className="promotion-header-wrapper" src={img}></img>
        </>
    )
}

export default PromotionHeaderLarge;
