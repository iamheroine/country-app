import axios from "axios";
import { CountryType } from "../types/countryType";

const apiUrl = "https://restcountries.com/v3.1/all";

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export async function countryApi(): Promise<CountryType[]> {
  try {
    const response = await axiosInstance.get(apiUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Country 정보 호출에 실패했습니다.", error);
    return [];
  }
}
