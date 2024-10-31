//happy-app/src/Components/Factors.js

import { useState } from "react";
import { AgGridReact } from "ag-grid-react"; 
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useFactorsData } from "../api"; //hook
import React from 'react';

const Factors = () => {
    const [year, setYear] = useState("2020"); // Default year
    const [selectedColumns, setSelectedColumns] = useState({
        score: true,
        economy: false,
        family: false,
        health: false,
        freedom: false,
        generosity: false,
        trust: false,
    });

    const { loading, factors, error } = useFactorsData(year); // Custom hook

    // Handle dropdown change
    const handleYearChange = (e) => setYear(e.target.value);

    // Handle radio button change
    const handleColumnChange = (e) => {
        setSelectedColumns({
            ...selectedColumns,
            [e.target.name]: e.target.checked
        });
    };

    // Always include rank and country
    const columns = [
        { headerName: "Rank", field: "rank", flex:1 },
        { headerName: "Country", field: "country", flex:2 },
    ];

    // Add selected columns
    for (let key in selectedColumns) {
        if (selectedColumns[key]) {
            columns.push({ 
                headerName: key.charAt(0).toUpperCase() + key.slice(1),
                field: key,
                flex:1,
                maxWidth:100 });
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div>
                <h2>Factors by Year</h2>
                <div>
                    {/* Year Dropdown */}
                    <label htmlFor="select">Select Year:</label>
                    <select value={year} onChange={handleYearChange} style={{ width: 'auto', margin: '5px' }}>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
            </div>



            {/* Radio Buttons for Column Selection */}
            <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {["score", "economy", "family", "health", "freedom", "generosity", "trust"].map((col) => (
                    <label key={col}>
                        <input
                            type="checkbox"
                            name={col}
                            checked={selectedColumns[col]}
                            onChange={handleColumnChange}
                        />
                        {col.charAt(0).toUpperCase() + col.slice(1)}
                    </label>
                ))}
            </div>

            {/* Display AG Grid */}
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <div className="ag-theme-alpine" style={{ height: "400px", width: '100%', maxWidth:'1000px' }}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error.message}</p>
                    ) : (
                        <AgGridReact
                            rowData={factors}
                            columnDefs={columns}
                            domLayout="autoHeight" // Adjusts grid height based on content
                        />
                    )}
                </div>
            </div>
        </div>  
    );
};

export default Factors;