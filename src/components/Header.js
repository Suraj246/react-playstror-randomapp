import React, { useState } from 'react'

const Header = () => {
    const [input, setInput] = useState('')
    return (
        <div className="header">
            <header>
                <div className="search-field">
                    <input type="text" placeholder='Search for Products...' className="input-search"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    {input === '' ? <i className='bx bx-search-alt-2 search'></i> : null}

                    <i className='bx bxs-microphone bx-sm' ></i>
                </div>
                <div className="address-header">
                    <i className='bx bx-location-plus  bx-sm' ></i>
                    <span className="address">13, Tashkent Marg, Civil Lines, Prayer...</span>
                    <span><i className='bx bxs-bell-ring  bx-sm ring'>
                        <sup>2</sup>
                    </i>
                    </span>

                    <span><i className='bx bx-cart-add  bx-sm' ></i></span>
                </div>
            </header>
        </div>
    )
}

export default Header
