import { CountryType } from "../types/countryType";

interface Props {
  country: CountryType;
}

const CountryCard = ({ country }: Props) => {

  return (
    <div>
        <img src={country.flags.svg}  />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;
