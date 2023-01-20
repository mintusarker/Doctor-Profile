import React from 'react';
import img from '../../assets/Rectangle 10.png'
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className='text-center text-2xl my-14'>About Me</h2>
            <div className='mx-24 mb-32'>
                <div className='grid grid-cols-1 md:grid-cols-1 gap-10 lg:grid-cols-2 justify-center items-center'>
                    <div>
                        <img style={{height: '648px'}} src={img} alt="" />
                        <button className='' id='button'>Contact Dr. Goswami</button>
                    </div>
                    <div className="about-text">
                        <p>Hello, I have completed an undergraduate degree in psychology at Delhi University, subsequently pursued graduate training in counseling psychology at the AIIMS Delhi, and completed a doctorate in clinical psychology at the Adler School of Professional Psychology. I have clinical interests and worked with children, teens, adults, diagnostic assessment and addictions. I use a broad range of cognitive behavioral and insight oriented techniques in the psychotherapy and counseling process.I have also taught a broad variety of graduate psychology and counseling courses at the Delhi University and Jamia Milia Islamia. I have lectured and presented training seminars and workshops nationally and internationally in Europe and East Asia. My research and publication interests have included addictions, psychometrics, clinical training and supervision, and the integration of spiritual values in psychotherapy and supervision.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;