import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Service/Services';
import Text from '../Text/Text';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Text></Text>
            <Review></Review>
            <Services></Services>
        </div>
    );
};

export default Home;