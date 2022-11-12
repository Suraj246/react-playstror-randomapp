import React, { useState } from 'react'
import products from './data'
const Services = () => {
    return (
        <div className="container-products-center">
            <div className="container-products">
                {
                    products.map((elem, idx) => {
                        return (
                            <div key={idx} className="services-products">
                                <span>{elem.icon}</span>
                                <span>{elem.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services
