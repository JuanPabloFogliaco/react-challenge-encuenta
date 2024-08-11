import { Response } from "../interfaces/IResponseV1";
import { RaceSortedResponse } from "../interfaces/IResponseV2";
import mockData from "../mock/responseMock.json";

//Cambiar si se ejecuta en localhost, linea 19 y 32.
//const DEV_URL_BASE = "http://localhost:3001";
const PROD_URL_BASE = "https://nest-challenge-encuentra.onrender.com";

export const MOCK_fetchRaceData = async () => {
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      resolve(mockData as Response);
    }, 5000);
  });
};

export const fetchRaceData_V1 = async () => {
  try {
    const response = await fetch(`${PROD_URL_BASE}/race`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result: Response = await response.json();
    return result;
  } catch (error) {
    throw error instanceof Error ? error.message : "Unknown error";
  }
};

export const fetchRaceData_V2 = async () => {
  try {
    const response = await fetch(`${PROD_URL_BASE}/race/sorted`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result: RaceSortedResponse = await response.json();
    return result;
  } catch (error) {
    throw error instanceof Error ? error.message : "Unknown error";
  }
};
