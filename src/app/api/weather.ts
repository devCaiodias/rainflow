import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";

//  Api para pegar os dados do clima da cidade

export async function fetchWeather(city: string) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        //  Pegando dados do .env.local
        appid: process.env.NEXT_PUBLIC_API_KEY, // Usando a chave do ambiente
        units: "metric",
        lang: "en",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    return null;
  }
}
