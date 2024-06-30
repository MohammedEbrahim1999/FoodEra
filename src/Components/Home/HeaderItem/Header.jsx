import React from 'react'
import './Header.css';
const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="row">
                    <div className='col-md-6'>
                        <h2> Good food choices are good investments. </h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                        <button className='order'> Order Now  <i className='fa-solid fa-basket-shopping'></i></button>
                        <button className='learn'> Learn More <i class="fa-solid fa-chevron-right"></i> </button>
                    </div>
                    <div className='col-md-6'>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
