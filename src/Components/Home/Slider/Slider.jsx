import React from 'react'
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
    return (
        <section className="slider">
            <div className="container">
                <div className="row">
                    <h2 className='test'>Testimonials</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <Carousel>
                            <Carousel.Item>
                                < img
                                    className='first'
                                    src='/imgs/simab.jpg'
                                    alt='Simab Dave'
                                /><br />
                                <Carousel.Caption>
                                    <p>"Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts. Separated they <br /> live."</p>
                                    <h3>Simab Dave - Web Designer</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                < img
                                    className='second'
                                    src='/imgs/Doe.jpg'
                                    alt='jonathan Doe'
                                />
                                <Carousel.Caption>
                                    <p>"Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts. Separated they <br /> live far from the countries Vokalia."</p>
                                    <h3> jonathan Doe - UX Designer</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                < img
                                    className='third'
                                    src='/imgs/Maccy.jpg'
                                    alt='Maccy Doe'
                                />
                                <Carousel.Caption>
                                    <p> "Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts.<br /> they live far from the countries Vokalia." </p>
                                    <h3>Maccy Doe - Front End </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider
