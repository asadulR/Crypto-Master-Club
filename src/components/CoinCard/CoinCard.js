import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    return (
        <div>
            <Link to='/coins'>
                <div className='flex items-center shadow-lg justify-between rounded-2xl w-[250px] bg-white py-4 px-6 ' >
                <div>
                    <img className='w-16 md:w-20 lg:w-25' src={coin.image} alt="" />
                </div>
                <div>
                    <p>{coin.name}</p>
                    <p>{coin.symbol}</p>
                </div>
        </div>
            </Link>
        </div>
    );
};

export default CoinCard;