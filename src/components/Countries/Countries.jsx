import { useEffect, useState } from "react";
import CountryDetails from "../CountryDetails/CountryDetails";

const Countries = () => {
  const [country, setCountry] = useState([]);
  const [visit, setVisit] = useState(0);
  const [name, setName] = useState([]);

  const first10 = () =>{
    const newArray = country.slice(0, 10); // [2, 3, 4]
    setCountry(newArray)
  }

  

  const handleVisitedCountry = (country) => {
    setVisit(visit + 1);

    const newName = [...name, country];
    setName(newName);
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-5xl my-10">
        Total Countries: {country.length}
      </h2>

      <div className="flex gap-6">
      <button className="btn" onClick={first10}>show first 10</button>
      </div>
      <h3 className="text-3xl font-semibold my-4">
        Total visited country: {visit}
      </h3>


      {name.map((n) => (
        <li key={n.cca2}> {n.name.common} </li>
      ))}

      <div className="grid grid-cols-3 gap-10 ">
        {country.map((country) => (
          <CountryDetails
            country={country}
            key={country.cca2}
            handleVisitedCountry={handleVisitedCountry}
          >
            {" "}
          </CountryDetails>
        ))}
      </div>
    </div>
  );
};

export default Countries;
