import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '39f482885amsh67bdd178e180641p122540jsna2991953f3f6',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async (url) => {
    const {data} =  await axios.get(`${BASE_URL}/${url}`,options)

    return data;
    
  }