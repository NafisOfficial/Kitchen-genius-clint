import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Items = () => {

    const Items = useLoaderData();

    console.log(Items);

    return (
        <div>
            <h2>This is item page.</h2>
        </div>
    );
};

export default Items;