import { useEffect, useState } from "react";
import { countryApi } from "../api/countryApi";
import { CountryType } from "../types/countryType";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const [countryList, setCountryList] = useState<CountryType[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<CountryType[]>([]);

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

  const handleSelectedCountry = (country: CountryType): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: CountryType) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: CountryType) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  return (
    <>
      <h2>Favorite Countries</h2>
      <div>
        {selectedCountries.map((country: CountryType) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectedCountry={handleSelectedCountry}
            />
          );
        })}
      </div>
      <h1>Countries</h1>
      <div>
        {countryList.map((country: CountryType) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectedCountry={handleSelectedCountry}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountryList;
