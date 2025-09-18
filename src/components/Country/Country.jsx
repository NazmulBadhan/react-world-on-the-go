import React, { use, useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    // console.log(country)
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // basic way

        // if(visited){
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }

        // second way
        // setVisited(visited ? false : true);

        // third way
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000? "- Big country" : "- Small country"}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;