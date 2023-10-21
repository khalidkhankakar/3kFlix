import MovieCard from "@/app/components/MovieCard"


const page = async ({params}) => {
    const url = `https://netflix54.p.rapidapi.com/search/?query=${params.slug}&offset=0&limit_titles=${20}&limit_suggestions=20&lang=en`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '31a66909e4msh2a1cf4703e4e230p1d7808jsnd3536f6fd34d',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };

    let response = await fetch(url, options);
    let data = await response.json();
  return (
    <section class="text-red-600 body-font">
    <h1 className='text-red-700 text-3xl mt-4 font-semibold text-center font-ubuntu'>Movies/Web-series</h1>
    <div class="container px-5 py-20 mx-auto">
      <div class="flex flex-wrap -m-4">
        {data.titles.map((element, idx) => {
          return <MovieCard element={element} key={idx} />
        })}

      </div>
    </div>
  </section>
  )
}

export default page