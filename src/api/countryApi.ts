import axios from "axios";
import { Country } from "../type/countryType";

const apiUrl = import.meta.env.VITE_COUNTRY_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export const countryApi = async (): Promise<Country[]> => {
  // Country 데이터 구조를 보면 배열 안에 들어있기 때문에 Country의 타입은 배열임
  try {
    const response = await axiosInstance.get(apiUrl);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Country 정보 호출에 실패했습니다.", error);
    return [];
  }
};
