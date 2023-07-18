import axios from 'axios'

//const axios = require('axios');

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

//const axios = require('axios');

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '65d0fd0c45msh18b611ff2d2b715p109209jsn3d1518b28935',//process.env.APIKEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data
}