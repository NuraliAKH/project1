import React from 'react'
import './About.containers.css'
import Img from '../../../assets/Business competition-bro 1.png'

export default function About() {
    return (
        <div className='about_us container'>
            <div className="about_us_text">
                <p className='about_title'>
                    About Us
                </p>
                <p className='about_desc'>
                    The model offers a framework for discussing problems related <br />
                    to the user's experience, as well as possible ways and means <br />
                    of solving them. Application development begins at the top level <br />
                    (strategy), where the future software product is described quite <br />
                    abstractly from the point of view of the expectations of both users <br />
                    and the customer.
                </p>
                <div className="about_info">
                    <div className="info">
                        <span>800</span>
                        <br />
                        Pupils
                    </div>
                    <div className="info">
                        <span>18</span>
                        <br />
                        Teachers
                    </div>
                    <div className="info">
                        <span>6</span>
                        <br />
                        Foreign languages
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={Img} alt="" />
            </div>
        </div>
    )
}
