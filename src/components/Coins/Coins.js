import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=60&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data));
            setLoading(false);
    }, [])

    // console.log(coins)
    return (
        <div>
            <p className='text-center pt-7 text-2xl text-gray-600 font-semibold font-serif'>Available Crypto Currencies</p>
            <h2 className='text-center mt-3 text-xl text-gray-600 '>Total coins: {coins.length}</h2>
            <div className='container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5'>
            {
                coins.map(coin => <CoinCard
                     key={coin.id} 
                     coin={coin}
                    ></CoinCard>)
            }
            </div>
        </div>
    );
};

export default Coins;