import axios from "axios";

//  Pegando dados do .env.local
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/forecast";

// Api para pegar os dados da previsão horária

export async function fetchHourlyWeather(lat: number, lon: number) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY, // ✅ Incluindo a chave de API
        units: "metric",
        lang: "pt_br",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar previsão horária", error);
    return null; // Retorna null em caso de erro
  }
}
