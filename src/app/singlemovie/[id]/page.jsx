import Image from "next/image";

const Singlemovies = async ({params}) => {
  const fetching = await fetch(`https://netflix-data.p.rapidapi.com/title/details/?id=${params.id}` , {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '188f914a41msh1173a21487141aap17c814jsnb145380aef56',
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
  }
)
  const parse_data = await fetching.json();
  const main_data = await parse_data[0].details;
  console.log(main_data)

  
  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">

  <div class="container px-5 py-10 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">


      <Image alt="ecommerce" class="lg:w-1/2 object-cover object-center rounded border border-gray-200" src={main_data.backgroundImage.url} width={500} height={500}/>

      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{main_data.type}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{main_data.title}</h1>
        <p class="leading-relaxed">{main_data.synopsis}</p>
        <div class="flex flex-col mt-2 items-center pb-2 border-b-2 border-gray-200 mb-5">
            <span class="mx-3 text-xl font-bold">Geners</span>
            {main_data.genres.map((ele)=>{
        return <span className="mx-2 text-black" key={ele.id}>{ele.name}</span>
      })}

        </div>
        {main_data.directors.length>0  && <div class="flex  mt-2 items-center pb-2 border-b-2 border-gray-200 mb-2">
            <span class="mx-3 text-xl font-bold">Directors</span>
            {main_data.directors.map((ele)=>{
        return <span className="mx-2 text-black" key={ele.id}>{ele.name}</span>
      })}
        </div>}

       {main_data.writers.length>0  && <div class="flex  mt-2 items-center pb-2 border-b-2 border-gray-200 mb-2">
            <span class="mx-3 text-xl font-bold">Writers</span>
            {main_data.writers.map((ele)=>{
        return <span className="mx-2 text-black" key={ele.id}>{ele.name}</span>
      })}
        </div>}

    
      </div>
    </div>
  </div>
  <div class="flex flex-col w-[80%] m-auto  justify-center items-center  border-gray-200 mb-2">
            <span class="mx-3 text-xl font-bold">Casts/Actors&Actresses</span>
            <div className="">
            {main_data.cast.map((ele, id)=>{
              return <span className="mx-1 text-black" key={ele.id}><span className="font-bold">{id+1}.</span> {ele.name}</span>
            })}
            </div>

        </div>
</section>
  )
}

export default Singlemovies