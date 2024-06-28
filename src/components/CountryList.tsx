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
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mt-12">
        Favorite Countries
      </h2>
      <div className="selected-country-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
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
      <h1 className="text-3xl font-bold text-center mb-8">Countries</h1>
      <div className="country-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default CountryList;
