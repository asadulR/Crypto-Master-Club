import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams();
    const [coinDetails, setCoinDetails] = useState({});
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(res => res.json()).then(data => setCoinDetails(data))
    }, [id])
    // console.log(coinDetails)
    return (
        <div className='container mx-auto my-32'>
            <div className="grid grid-cols-1 h-full md:grid-cols-2 justify-items-center gap-4 items-center">
                <div className='order-2 md:order-1'>
                    <h2 className='text-3xl font-semibold text-gray-600'>General Info:</h2>
                    <hr />
                    <h2 className='mt-4'>Coin Name: {coinDetails.name}</h2>
                    <h2>Market Cap Rank: {coinDetails.market_cap_rank}</h2>
                    <h2>Origin: {coinDetails.country_origin ? coinDetails.country_origin: 'Not Found'}</h2>
                    <h2>Contract Address: {coinDetails.contract_address ? coinDetails.contract_address: 'Not Found'}</h2>
                    <h2>Hashing Algorithm: {coinDetails.hashing_algorithm ? coinDetails.hashing_algorithm: 'Not Found'}</h2>
                    <h2>Genesis Date: {coinDetails.genesis_date ? coinDetails.genesis_date: 'Not Found'}</h2>
                    <h2>Last Updated: {coinDetails.last_updated}</h2>



                    <h2 className='text-3xl font-semibold mt-6 text-gray-600'>Scores:</h2>
                    <hr />
                    <h2 className='mt-4'>Community Score: {coinDetails.community_score ? coinDetails.community_score: 'Not Found'}</h2>
                    <h2>Developer Score: {coinDetails.developer_score ? coinDetails.developer_score: 'Not Found'}</h2>
                    <h2>Liquidity Score: {coinDetails.liquidity_score ? coinDetails.liquidity_score:'Not Found'}</h2>
                    <h2>Public Interest Score:  {coinDetails.public_interest_score}</h2>
                </div>
                <div className='order-1 md:order-2 justify-items-center'>
                    <img src={coinDetails.image?.large} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;