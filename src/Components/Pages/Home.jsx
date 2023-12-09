import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Footer from './Footer';
import AllProduct from './AllProduct';
import HotDeals from './HotDeals';

const Home = () => {
    return (
        <div>
            <div>
                
                <div className='mx-auto w-10/12'>
                <Banner></Banner>
                    <HotDeals></HotDeals>
                    <Brands></Brands>

                    <AllProduct></AllProduct>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;