import axios from 'axios';

//  Pegando dados do .env.local
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const ONE_CALL_URL = 'https://api.openweathermap.org/data/3.0/onecall';

//  Api para pegar Uv Index

export async function fetchUVIndex(lat: number, lon: number) {
  try {
    const response = await axios.get(ONE_CALL_URL, {
      params: {
        lat,
        lon,
        exclude: 'minutely,hourly,daily', // Só queremos o índice UV
        appid: API_KEY,
      },
    });
    return response.data.current.uvi; // Retorna apenas o índice UV
  } catch (error) {
    console.error('Erro ao buscar índice UV:', error);
    return null;
  }
}
