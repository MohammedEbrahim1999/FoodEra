import React from 'react'
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import DoneAnimation from '../../../../public/Animation/done.json';
const Contact = () => {
    const [state, handleSubmit] = useForm("xoqgbaea");
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2> Hurry up! Subscribe our newsletter <br /> and get 25% Off</h2>
                        <p> Limited time offer for this month. No credit card required. </p>
                        <form onSubmit={handleSubmit}>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder='Email Addresse Here'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <button type="submit" className="submit" disabled={state.submitting}> {state.submitting ? "Loading....." : "Subscribe"} </button>
                            {state.succeeded && (<p className="submit-message flex"> <Lottie className="done-animation" loop={false} animationData={DoneAnimation} /> Thank You For subscription 👌.</p>)}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
