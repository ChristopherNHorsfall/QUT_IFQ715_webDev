//src/api.js
import { useEffect, useState } from "react";
import React from 'react';

//Hook for Rankings
export function useRankings(year) {
    const [loading, setLoading] = useState(false);
    const [rankings, setRankings] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      getRankings(year)
        .then((data) => setRankings(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, [year]);
  
    return {
      loading,
      rankings,
      error,
    };
  }

// Function to get Rankings
export function getRankings(year) {
  const API_KEY = 'EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV';
  const url = `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?year=${year}`;
  
  return fetch(url, {
      method: 'GET',
      headers: {
          'X-API-KEY': API_KEY
      }
  })
  .then((res) => {
      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
  });
}

//Hook for CountryTracker
export function useCountryData(country) {
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCountryData(country)
      .then((data) => {
        console.log('Fetched country data:', data); //debugging
        setCountryData(data)})
      .catch((err) => {
        console.error('Error fetching country data:', err); //debugging
        setError(err)})
      .finally(() => setLoading(false));
  }, [country]);

  return {
    loading,
    countryData,
    error,
  };
}

//Function to get country data
function getCountryData(country) {
  const API_KEY = 'EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV';
  const url = `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?country=${country}`;
  
  return fetch(url, {
      method: 'GET',
      headers: {
          'X-API-KEY': API_KEY
      }
  })
  .then((res) => {
      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
  });
}

export const loginUser = async (email, password) => {
  const API_URL = `'https://d2h6rsg43otiqk.cloudfront.net/prod`;
  const url = `${API_URL}/user/login`;

  const response = await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV",
      },
      body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
      throw new Error(data.message || "Login failed");
  }

  return data; // Returns the response data
};

//hook for factors 
export function useFactorsData(year) {
    const [loading, setLoading] = useState(false);
    const [factors, setFactors] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      console.log("Fetching factors for year: ", year);
      setLoading(true);
      getFactors(year)
        .then((data) => {
          setFactors(data);
          console.log("Factors data: ", data); // Log the data once fetched
          })
        .catch((err) => {
          setError(err);
          console.error("Error: ", err); // Log the error if there is one
          })
        .finally(() => setLoading(false));
    }, [year]);

    return {
      loading,
      factors,
      error,
    };

};

export function getFactors(year) {
  const API_KEY = 'EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV';
  const url = `https://d2h6rsg43otiqk.cloudfront.net/prod/factors/${year}`;
  
  return fetch(url, {
      method: 'GET',
      headers: {
          'X-API-KEY': API_KEY,
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  })
  .then((res) => {
    console.log("Response Status: ", res.status);
      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
  })
  .then((data) => {
    console.log("Fetched Data: ", data); // Log the fetched data
    return data;
  })
  .catch(err => {
    console.error("Error fetching factors:", err);
    throw err;
});
};