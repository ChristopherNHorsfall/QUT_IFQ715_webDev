import { useState,} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useCountryData } from '../api';
import React from 'react';

const CountryHappinessTracker = () => {
    const [country, setCountry] = useState('Australia'); //default year

    //Use useCountryData hook to fetch data
    const { loading, error, countryData} = useCountryData(country);
  

    // Update Country when dropdown value changes
    const handleCountryChange = (e) => {
    setCountry(e.target.value);
    };

    const columns = [
        { headerName: 'Year', field: 'year' },
        { headerName: 'Rank', field: 'rank' },
        { headerName: 'Score', field: 'score' },
    ];

    const countries = [  
        "Afghanistan",
        "Albania",
        "Algeria",
        "Angola",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahrain",
        "Bangladesh",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo (Brazzaville)",
        "Congo (Kinshasa)",
        "Costa Rica",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Estonia",
        "Ethiopia",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Guatemala",
        "Guinea",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Cyprus",
        "North Macedonia",
        "Northern Cyprus",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestinian Territories",
        "Panama",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Somalia",
        "Somaliland Region",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"]

  return (
    <div style={{ margin: '20px', display:'flex',flexDirection:'column', gap:'5px' , justifyContent: 'center'}}>
        <div>        
            <h2>Country Happiness Tracker</h2>
            <label>Select Country: </label>
            <select value={country} onChange={handleCountryChange}style={{width:'auto', margin:'5px'}}>
                <option value="">Select Country</option>
                    {countries.map((countryName)=> (
                        <option key={countryName} value={countryName}>
                            {countryName}
                        </option>
                    ))}
            </select>
        </div>


        <div className="ag-theme-alpine" style={{ 
            height: '40vh', 
            maxHeight: '500px',
             width: '100%', 
             maxWidth:'600px', 
             overflowY:'auto'}}>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading data: {error.message}</p>
            ) : (
                <AgGridReact
                    rowData={countryData}  
                    columnDefs={columns} 
                    domLayout='autoHeight'
                    defaultColDef={{resizable:true, flex:1}}
                />
            )}
        </div>
    </div>
  );
};

export default CountryHappinessTracker;