import React from 'react'
import './Hand.css';
const Hand = () => {
  return (
    <div className="hand">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul>
                        <li>  <i class="fa-solid fa-check fa-fade" ></i> Etiam sed dolor ac diam volutpat </li>
                        <li>  <i class="fa-solid fa-check fa-fade"></i> Erat volutpat aliquet imperdiet. </li>
                        <li>  <i class="fa-solid fa-check fa-fade"></i> purus a odio finibus bibendum. </li>
                    </ul>
                    <button> <a href="#"> Learn More </a></button>
                </div>
                <div className="col-md-6">
                    <img src="/imgs/products.png" alt="Products" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hand
