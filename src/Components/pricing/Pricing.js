import React from 'react';
import PriceOption from '../priceOption/PriceOption';

const Pricing = () => {
    const pricinigOption = [
        {
            id: 1, name: 'Free', price: 0, features:
                ['awsum feature',
                    'Extra feature', 'useless features',
                    'amni features']
        },
        {
            id: 2, name: 'Medium', price: 199, features: ['awsum feature',
                'Everything on free',
                'useless features',
                'amni features']
        },
        {
            id: 3, name: 'Premium ', price: 299, features: ['awsum feature',
                'Extra feature',
                'useless features',
                'amni features']
        }
    ]
    return (
        <div>
            <h2 className='text-5xl mt-5 font-bold bg-indigo-300 p-12 text-white'>Best deal of the town</h2>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    pricinigOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;