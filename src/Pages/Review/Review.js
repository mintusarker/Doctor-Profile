import React from 'react';
import elips from '../../assets/Ellipse 1.png'
import './Review.css'
import { HiOutlineChevronLeft, HiStar, HiOutlineChevronRight } from "react-icons/hi";
const Review = () => {
    return (
        <div>
            <div className='mx-auto'>
                <h2 className='text-3xl text-center mb-10 font-semibold'>Customer Reviews</h2>
                <div className='flex gap-4' id='review'>
                    <div id='img'>
                        <img src={elips} alt="" />
                        <p className='text-center'>Emily Kinly</p>
                    </div>
                    <div id='para'>
                        <div className='flex'>
                            <HiStar></HiStar>
                            <HiStar></HiStar>
                            <HiStar></HiStar>
                            <HiStar></HiStar>
                            <HiStar></HiStar>
                        </div>
                        <div className='font-semibold'>5/5</div>
                        At first, I had my doubts about online counselling, but I gave it a shot and was pleasantly surprised to learn how much it can actually aid you. Dr. Sayesta created a wonderfully peaceful, healing environment where I felt free to share details with her that I would normally feel embarrassed to do so. She offers much-appreciated compassion instead of any judgement, followed by advice. She can pinpoint the source of my problems and the exercises I can do to solve them. I occasionally feel depressed again, but he constantly inspires me to get back on the right track. A truly helpful person is someone who won't judge you.
                    </div>
                </div>

            </div>
            <div className='flex gap-2 justify-center my-5'>

                <HiOutlineChevronLeft className='h-5 w-7 border-2 bg-white'></HiOutlineChevronLeft>
                <HiOutlineChevronRight className='h-5 w-7 border-2 bg-white'></HiOutlineChevronRight>
            </div>
        </div>
    );
};

export default Review;