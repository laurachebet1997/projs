export const exercicesOptions = {
    method: 'GET',
    //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '65d0fd0c45msh18b611ff2d2b715p109209jsn3d1518b28935',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const FetchData = async (url,options) =>{
    const response = await fetch(url,options)
    const data = await response.json()
    return data;
}


//export default FetchData