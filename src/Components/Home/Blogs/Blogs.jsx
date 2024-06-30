import React from 'react'
import './Blogs.css';
import Data from '../../../Data.js';
const Blogs = () => {
    const blogItems = Data.map((item) => {
        return (
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img} alt={item.title} />
                    <h5> {item.title} </h5>
                    <span> {item.time} </span><br/>
                    <h6> {item.price}</h6>
                    <span className='deleted'>{item.deletedPrice}</span>
                </div>
                <button> <a href="#"> Order Now </a> </button>
            </div>
        )
    })
    return (
        <div className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Explore Our Foods </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br /> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className="row">
                    {blogItems}
                </div>
            </div>
        </div>
    )
}

export default Blogs
