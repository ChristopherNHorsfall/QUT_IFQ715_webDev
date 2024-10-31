import { useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useRankings } from '../api';
import React from 'react'; 

const SurveyResults = () => {

    const [year, setYear] = useState('2020');  // Default year for dropdown
    
    // Use the useRankings hook to fetch rankings data
    const { loading, rankings, error } = useRankings(year);

    // Update year when dropdown value changes
    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    
    const columns = [
    { headerName: 'Rank', field: 'rank', flex:1 },
    { headerName: 'Country', field: 'country',flex:2 },
    { headerName: 'Score', field: 'score' ,flex:1}
    ];
    
    return (
    <div style={{ margin: '20px', display:'flex',flexDirection:'column', gap:'5px' , justifyContent: 'center'}}>
        <div>        
            <h2>Survey Results</h2>
            <label for select> Select Year:</label>
            <select value={year} onChange={handleYearChange} style={{width:'auto', margin:'5px'}}>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
            </select>
        </div>


        <div className="ag-theme-alpine" style={{ height: '60vh', maxHeight: '500px', width: '40vh',minWidth: '300px', maxWidth:'600px', overflowY:'auto' }}>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading data: {error.message}</p>
            ) : (
                <AgGridReact
                    rowData={rankings}  
                    columnDefs={columns} 
                    domLayout='autoHeight'
                    defaultColDef={{resizable:true, flex:1}} //make columns resizable
                />
            )}
        </div>
    </div>
    );
};


export default SurveyResults;