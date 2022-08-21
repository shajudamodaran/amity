import React from 'react'
import { productList } from '../../Constants/Data'

function ProductList() {
    return (
        <div className='product-list-container'>

            <ul className='product-list'>

                {
                    productList.map((eachProduct, key) => {
                        return (

                            <li className={`product-item ${key%2==0?"odd-product":"even-product"}`}>

                                <div className="left-item">
                                    <img src={eachProduct.image} alt="" />
                                </div>

                                <div className="right-item">
                                    <div className="product-title">{eachProduct.nmae}</div>
                                    <p className="product-caption">{eachProduct.capton}</p>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )
}

export default ProductList