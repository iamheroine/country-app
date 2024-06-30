import { CountryType } from "../types/countryType";

interface Props {
  country: CountryType;
  handleSelectedCountry: (country: CountryType) => void;
}

const CountryCard = ({ country, handleSelectedCountry }: Props) => {
  return (
    <div
      onClick={() => handleSelectedCountry(country)}
      className="country-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform bg-green-100 border border-green-500"
    >
      <img src={country.flags.svg} className="w-20 h-auto mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{country.name.common}</h3>
      <p className="text-gray-600">{country.capital}</p>
    </div>
  );
};

export default CountryCard;