import { fetchWeather } from '../../api/weather';

export default async function WeatherPage({ params }: { params: { city: string } }) {
  // Decodificar a cidade da URL
  const city = decodeURIComponent(params.city.replace(/-/g, ' '));

  // Buscar dados do clima
  const weather = await fetchWeather(city);

  if (!weather) return <p className="text-red-500">❌ Cidade não encontrada!</p>;

  return (
    <main className="flex bg-white opacity-40 w-96 m-auto items-center">
      <div>
        <p>{weather.name}</p>
        <p>{weather.weather[0].description}</p>
      </div>
      <div>

      </div>
      <div>

      </div>
    </main>
  );
}


{/* <main className="flex flex-col items-center justify-center min-h-screen p-4">
<h1 className="text-4xl mb-4">🌦️ Clima em {weather.name}</h1>
<p className="text-2xl">🌡️ Temperatura: {weather.main.temp}°C</p>
<p className="text-lg">🌤️ Condição: {weather.weather[0].description}</p>
<p className="text-lg">💨 Vento: {weather.wind.speed} km/h</p>
<p className="text-lg">📊 Umidade: {weather.main.humidity}%</p>
<a href="/" className="mt-8 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
  🔙 Voltar
</a>
</main> */}
