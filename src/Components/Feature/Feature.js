import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div>
            <div className='flex'>
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <p>{feature}</p>
            </div>
        </div>
    );
};

export default Feature;