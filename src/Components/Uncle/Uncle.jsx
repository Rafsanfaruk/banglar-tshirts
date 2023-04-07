import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin>Nabila</Cousin>
                <Cousin>Nabil</Cousin>
            </section>
        </div>
    );
};

export default Uncle;