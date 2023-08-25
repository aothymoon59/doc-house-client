import React from 'react';

const TabCard = ({ image, name }) => {
    return (
        <div className="border rounded-[10px] p-5 2xl:p-10 text-center cursor-pointer">
            <img className="mx-auto mb-[30px]" src={image} alt={name} />
            <h4 className="font-semibold text-[#3B3A3A]">{name}</h4>
        </div>
    );
};

export default TabCard;