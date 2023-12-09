import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-full h-1/2 md:w-3/4 md:h-1/4 lg:w-2/5' src="https://wpbingosite.com/wordpress/beaufly/wp-content/uploads/2023/03/img-1.jpg" />
                    <div>
                       
                        <p className="py-6 text-4xl font-mediumbold">Choose The right Product for your specific Skin Concern.</p>
                        <button className="btn bg-primaryB text-white">Shop Know</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;