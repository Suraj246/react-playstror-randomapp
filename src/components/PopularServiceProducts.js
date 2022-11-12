import React from 'react'
import productsLists from './productsLists'

const PopularServiceProducts = () => {
    return (
        <div className="product-list-center">
            <div className="container-products-services">
                {
                    productsLists.map((elem, idx) => {
                        return (
                            <div key={idx} className="services">
                                <div className="header-products-container">
                                    <span className="header-products">{elem.header}</span>
                                </div>
                                <div className="product-names">
                                    {elem.productNames.map((product, idx) => {
                                        return (
                                            <div key={idx} className="product-name">
                                                <span>{product.icon}</span>
                                                <span>{product.productName}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularServiceProducts
