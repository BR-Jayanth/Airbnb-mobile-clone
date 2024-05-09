import React from 'react'
import heroimg from "../images/Group 77.png"

export default function Hero() {
    return (
        <section className="hero-section">
            <img className='hero-img' src={heroimg} alt="Hero section image" />
            <h1 className="hero-heading">
                Online Experiences
            </h1>
            <p className='hero-content'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.

            </p>
        </section>
    )
}
