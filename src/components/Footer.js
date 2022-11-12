import React from 'react'
import FooterList from './FooterList'

const Footer = () => {
    return (
        <footer>
            <h4 className="heading-allservice-provider">Services We Provide</h4>
            <div className="footer-list-center">
                <div className="footer-list">
                    {
                        FooterList.map((elem, idx) => {
                            return (
                                <div key={idx}>
                                    <div key={idx} className="footer-img-container">
                                        {/* <div className="footer-img-container"> */}
                                        <img src={elem.icon} alt="" />
                                        {/* </div> */}
                                        <div className="footer-img-name">
                                            <span className="">{elem.name}</span>
                                        </div>
                                        <span className="off">{elem.offer}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer
