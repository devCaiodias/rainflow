'use client'
import {archivo} from '../../public/font/font'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [city, setCity] = useState('')
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (city.trim()) {
      router.push(`/weather/${encodeURIComponent(city.replace(/\s+/g, '-'))}`);
    }
  }

  return (
    <>
      {/* main title */}
      <h1 className={`text_main ${archivo.className}`}>See the weather in your city</h1>

      {/* text input */}
      <form onSubmit={handleSubmit} className='form flex items-center'>
        <div className='input-weather'>
          <input
          type="text"
          placeholder="enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='ml-20 bg-transparent border-black border-2 py-2 rounded-full text-center text-2xl text-black hover:border-4' />
        </div>
        
        {/* button para ver o clima da cidade */}
        <div className='btn-weather'>
          <button type='submit' className='m-5 border-2 p-3 rounded-full border-black hover:border-white'>see weather</button>
        </div>
      </form>
    </>
  );
}
