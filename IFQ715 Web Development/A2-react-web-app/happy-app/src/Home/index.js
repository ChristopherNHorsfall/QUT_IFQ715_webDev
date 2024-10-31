//src/Home/index.js
import SurveyResults from '../Components/SurveyResults';
import CountryHappinessTracker from '../Components/CountryHappinessTracker';
import React from 'react';
import {useRankings} from '../api';
import {useCountryData} from '../api';

export default function Home() {
    return (
        <main className="flex-grow-1" style={{display: 'flex',justifyContent:"center", flexDirection:'column', alignItems:'center'}}>
          <SurveyResults useRankings={useRankings} />
          <CountryHappinessTracker useCountryData={useCountryData} />
        </main>
      );
   }