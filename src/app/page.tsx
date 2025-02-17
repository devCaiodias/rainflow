'use client'
import {archivo} from '../../public/font/font'

export default function Home() {
  return (
    <>
      {/* main title */}
      <h1 className={`text-8xl text-white w-8/12 ${archivo.className} ml-16 pb-7`}>See the weather in your city</h1>

      {/* text input */}
      <form className='flex items-center'>
        <input
        type="text"
        placeholder="enter your city"
        className='ml-20 bg-transparent border-black border-2 py-2 rounded-full text-center text-2xl text-black hover:border-4' />
        <button type='submit' className='m-5 border-2 p-3 rounded-full border-black hover:border-white'>see weather</button>
      </form>
    </>
  );
}
