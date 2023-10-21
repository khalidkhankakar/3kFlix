"use client"
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import Searchbar from '../components/Searchbar';


const Movies = () => {
  const myStringArray = ["sisu", "avengers", "batman", "vikings", "wichter", "pathaan", "bheed", "Inception", "oppenheimer", "joker", "stranger", "game of thrones", "breaking bad"];
  const randomIndex = Math.floor(Math.random() * myStringArray.length);

  const [num, setNum] = useState(12);
  const [articals, setArticals] = useState([])
  const url = `https://netflix54.p.rapidapi.com/search/?query=${myStringArray[randomIndex]}&offset=0&limit_titles=${num}&limit_suggestions=20&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '31a66909e4msh2a1cf4703e4e230p1d7808jsnd3536f6fd34d',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  useEffect(() => {
    const Fetching_func = async () => {

      let response = await fetch(url, options);
      let data = await response.json();
      setArticals(data.titles)
    }
    Fetching_func();
  },[])

  return (
    <>
    <Searchbar />
      <section class="text-red-600 body-font">
        <h1 className='text-red-700 text-3xl mt-4 font-semibold text-center font-ubuntu'>Movies/Web-series</h1>
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-wrap -m-4">
            {articals.map((element, idx) => {
              return <MovieCard element={element} key={idx} />
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default Movies
