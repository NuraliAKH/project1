import React from 'react'
import './skills.container.css'
import Speaking from '../../../assets/Shared goals-bro 2.png'
import Writing from '../../../assets/Typewriter-bro 1.png'
import Reading from '../../../assets/House bookshelves-bro 1.png'
import Listening from '../../../assets/Podcast audience-bro 1.png'
export default function Skills_container() {
    return (
        <div className='container skills_container'>
            <p className='skills'>Skills</p>
            <div className="d-flex">
                <div className="skill_speaking">
                    <img className='skill_image' src={Speaking} alt="" />
                    <p className='skill_title'>
                        Speaking
                    </p>
                    <p className='skill_desc'>
                        Improve your English skills and confidence. Live classes and interactive lessons online. <br />
                        20% extra free for a limited time only
                        <br /><br />
                        Learn English online and improve your <br />
                        skills through our high-quality courses and resources – all <br />
                        designed for adult language <br /> learners.
                    </p>
                    <button className='skill_btn'>Learn more</button>
                </div>
                <div className='right_skills'>
                    <div className="d-flex">
                        <div className="writing_skill">
                            <img className='skill_image_writing' src={Writing} alt="" />
                            <p className='skill_title'>
                                Writing
                            </p>
                            <p className='skill_desc_writing'>
                                One of the most important and <br />
                                extensive areas of natural <br />
                                science, the science that studies <br />
                                substances, also their composition

                            </p>
                            <button className='skill_btn'>Learn more</button>
                        </div>
                        <div className="reading_skill">
                            <img className='skill_image_reading' src={Reading} alt="" />
                            <p className='skill_title'>
                                Reading
                            </p>
                            <p className='skill_desc_writing'>
                                perception and response actions <br />
                                of the user resulting from the use <br />
                                and/or upcoming use of the <br />
                                product, system or service

                            </p>
                            <button className='skill_btn'>Learn more</button>
                        </div>
                    </div>
                    <div className="listening_skill">
                        <div className="d-flex">
                            <div className="text">
                                <p className='skill_title_listening'>
                                    Listening
                                </p>
                                <p className='skill_desc_writing'>
                                Here you can find activities to practise <br />
your listening skills. Listening will help you <br />
to improve your understanding 
                                </p>
                                <button className='skill_btn_listening'>Learn more</button>
                            </div>
                        <img className='skill_image_listening' src={Listening} alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
