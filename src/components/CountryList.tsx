import { useEffect, useState } from "react";
import { countryApi } from "../api/countryApi";
import { CountryType } from "../types/countryType";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const [countryList, setCountryList] = useState<CountryType[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data: CountryType[] = await countryApi();
        setCountryList(data);
      } catch (error) {
        alert(error);
      }
    };
    getCountries();
  }, []);

  console.log("상태", countryList);

  return (
    <>
      <h2>Favorite Countries</h2>
      <h1>Countries</h1>
      <div>
        {countryList.map((country: CountryType) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
      </div>
    </>
  );
};

export default CountryList;
