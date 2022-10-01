import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className='bg-orange-300 m-3 rounded-lg p-5 h-full shadow-2xl'>
            <div>
                <h1 className='text-6xl font-bold'>{price}/month</h1>
                <h1 className='text-2xl mt-3'>{name}</h1>
            </div>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-green-500 w-full rounded-full h-12 mt-5 '>buy now</button>
        </div>
    );
};

export default PriceOption;