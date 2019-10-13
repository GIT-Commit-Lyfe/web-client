import React from 'react'
import flag from '../../assets/flag-exp.png'

const ProductListCard = ({ image, size }) => {
    return (
        <div className={`col-md-${size} px-2- pb-3`}>
        <div style={{'borderRadius' : '0px'}} className="card px-1 py-2">
        <img style={{'borderRadius' : '0px'}} src={image} className="mx-auto card-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title my-0">Rolei</h5>
          <strong><p className="card-text mb-0 price">USD300</p></strong>
          <hr></hr>
          <span className="card-text mb-0">Paulina</span>
          
          <div className="row mt-2">
          <div className="col">
          <p className="mb-0">4.5 of 5</p>
          </div>
          <div className="col text-right">
          <p className="mb-0 px-1"><img src={flag} className="country-flag card-text mb-0"></img> SP</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    )
}

export default ProductListCard