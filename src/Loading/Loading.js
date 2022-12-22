import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div>
            <div  className='mt-15 w-ful flex justify-center align-items-center'>
        <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#b4f050'
            color='#87ada9'
        />
    </div>
        </div>
    );
};

export default Loading;