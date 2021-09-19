import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Lets go traveling around the world</h2>
            <h3>Countries Available: {countries.length}</h3>
            <section className="countries">

                {
                countries.map(country=> <Country 
                    key={country.name}
                    country={country}
                    
                    ></Country>)   
                }

            </section>
        </div>
    );
};
export default Countries;