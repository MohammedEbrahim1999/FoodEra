import React from 'react'
import './Pride.css';
const Pride = () => {
    return (
        <section className="pride">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/imgs/pride.png" alt="Pride" />
                    </div>
                    <div className="col-md-6">
                        <h2> We pride ourselves on making real food from the best ingredients. </h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button> <a href="#"> Learn More  </a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pride
