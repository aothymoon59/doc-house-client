import React from 'react';

const SingleContactDetails = ({ icon, title, desc, cardBg }) => {
    return (
        <div className={`px-10 md:px-5 xl:px-[43px] py-10 md:py-5 xl:py-[50px] flex items-center gap-5 rounded-[10px] text-white`} style={{ backgroundColor: `${cardBg}` }}>
            <div className='text-xl'>
                {
                    icon
                }
            </div>
            <div>
                <h2 className='font-bold text-xl md:text-lg xl:text-[25px] mb-2'>{title}</h2>
                <p className='md:text-sm xl:text-xl'>{desc}</p>
            </div>
        </div>
    );
};

export default SingleContactDetails;