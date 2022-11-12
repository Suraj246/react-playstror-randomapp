import React from 'react'
import servicesProvidersList from './servicesProvidersList'
const AllServices = () => {
    return (
        <>
            <h4 className="heading-allservice-provider">All Popular Service Providers</h4>
            <div className="product-list-center">
                <div className="container-products-services">
                    {
                        servicesProvidersList.map((elem, idx) => {
                            return (
                                <div key={idx} className="services">
                                    <div className="header-products-container">
                                        <span className="header-products">{elem.header}</span>
                                    </div>
                                    <div className="product-names">
                                        {elem.personNames.map((pn, idx) => {
                                            return (
                                                <div key={idx} className="product-name">
                                                    <span>{pn.icon}</span>
                                                    <span>{pn.name}</span>
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
        </>

    )
}

export default AllServices
