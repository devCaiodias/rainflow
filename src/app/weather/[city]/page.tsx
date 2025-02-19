import { fetchWeather } from '../../api/weather';
import { fetchHourlyWeather } from '@/app/api/hourlyweather';

interface WeatherPageProps {
  params: { city: string };
}

export default async function WeatherPage({ params }: WeatherPageProps) {

  const parametro = await params;
  
  // Decodificar a cidade da URL
  const city = decodeURIComponent(parametro.city.replace(/-/g, ' '));
  

  // Buscar dados do clima
  const weather = await fetchWeather(city);

  //  Caso não exista a cidade ou escreva errado
  if (!weather) {
    return ( 
      <div className='m-auto w-[700px] bg-white bg-opacity-40 text-center rounded-3xl p-8'>
        <h1 className='text-black font-extrabold text-8xl opacity-65'>This city does not exist !</h1>
      </div>
 )
  }
  
  // dados de previsão horária
  const {lat, lon} = weather.coord;
  const hourly = await fetchHourlyWeather(lat, lon)

  // convertendo para Inhg da Pressão
  const pressureInHg = (weather.main.pressure * 0.02953).toFixed(2);

  return (
    <main className="flex bg-white bg-opacity-45 w-[680px] m-auto rounded-3xl">
      <div className='items-center justify-center mx-7 my-3 font-bold '>
        <div className='text-center'>
          <p>{weather.name}</p>
          <p>{weather.weather[0].description}</p>
          <span className='text-6xl'>{Math.floor(weather.main.temp)}°C</span>
          <p>feels like {Math.floor(weather.main.feels_like)}°C</p>
          <p>high  {Math.floor(weather.main.temp_max)}° - Low {Math.floor(weather.main.temp_min)}°</p>
        </div>

        <div className='my-3 bg-slate-400 bg-opacity-65 rounded-2xl p-2'>
          <p>🕐 hourly forecast</p>
          <div className='flex my-3'>
          {hourly?.list.slice(0, 5).map((hour: any, index: number) => (
            <div key={index} className="text-center mx-2">
              <p>{Math.round(hour.main.temp)}°</p>
              <img
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                alt={hour.weather[0].description}
                className="w-10 h-10"
              />
              <p>{new Date(hour.dt * 1000).getHours()}:00</p>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div>
          <div className='text-center p-2 my-3 rounded-2xl bg-teal-400 bg-opacity-30'>
            <p className='my-3 font-semibold'>💧 Humidity</p>
            <h1 className='my-2'>{weather.main.humidity}%</h1>
          </div>
          <div className='text-center p-2 my-3 rounded-2xl bg-white bg-opacity-30'>
            <p className='my-3 font-semibold'>Country code</p>
            <h1 className='my-2'>{weather.sys.country}</h1>
          </div>
          <div className='text-center p-2 my-3 rounded-2xl bg-yellow-200 bg-opacity-30'>
            <p className='my-2 font-semibold'> Sunrise Sunset</p>
            <h1>☀️ {new Date(weather.sys.sunrise * 1000).getHours()}:00 AM</h1>
            <h1 className='my-2'>🌇 {new Date(weather.sys.sunset * 1000).getHours()}:00 PM</h1>
          </div>
      </div>
          
      <div>
          <div className='text-center p-2 my-3 ml-9 rounded-2xl bg-lime-400 bg-opacity-30'>
            <p className='my-3 mx-6 font-semibold'>🍃 Wind</p>
            <h1 className='my-2'>{Math.floor(weather.wind.speed)}%</h1>
          </div>
          <div className='text-center p-2 my-3 ml-9 rounded-2xl bg-gray-500 bg-opacity-30'>
            <p className='my-3 mx-6 font-semibold'>Pressure</p>
            <h1 className='my-2'>{pressureInHg}</h1>
            <p>inhg</p>
          </div>
          <div className='text-center p-2 my-3 ml-9 rounded-2xl bg-sky-900 bg-opacity-30'>
            <p className='my-3 mx-6 font-semibold'>Clouds</p>
            <h1 className='my-2'>{weather.clouds.all}%</h1>
          </div>
        </div>
    </main>
  );
}