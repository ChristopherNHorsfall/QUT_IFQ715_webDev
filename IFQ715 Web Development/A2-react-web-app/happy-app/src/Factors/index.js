//happy-app/src/Factors/index.js
import React from 'react';
import Factors from '../Components/Factors'
import {useFactorsData} from '../api';

export default function FactorsPage() {
    return (
        <div>
            <main className="flex-grow-1" style={{display: 'flex',justifyContent:"center", flexDirection:'column', alignItems:'center'}}>
                <h1>Factors Page</h1>
                <Factors useFactorsData={useFactorsData}/>
            </main>
        </div>
    );
};
