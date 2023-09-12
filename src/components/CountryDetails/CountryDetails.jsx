import { useState } from "react";

const CountryDetails = ({ country, handleVisitedCountry }) => {
  

  const [vi , setVi] = useState(false);

  const visit = () => {
    setVi(true)
  }

  const { name, area, capital, flags, population, region } = country;


  return (
    <div className="card bg-base-100 shadow-xl">
    
      <figure>
        <img src={flags.png} className="h-[150px]" alt="" />
      </figure>
      <div className="card-body">
        <h2>Name: {name.common}</h2>
        <p>Official name: {name.official}</p>
        <p>Area: {area}</p>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <div className="card-actions justify-end">
            {/* <button onClick={visit}>{vi? <div className="text-6xl">visited</div>: 'want to visit'}</button> */}
          {/* <button className="btn" onClick={handleVisitedCountry}>visited</button> */}
          <button onClick={visit}>
          {
            vi ? <button className="btn btn-disabled">visited</button> :   <button className="btn" onClick={() => handleVisitedCountry(country)}>visit</button>
          }</button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
