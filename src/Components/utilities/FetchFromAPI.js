import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  // url: BASE_URL,
  params: {
    maxResults: '50'
    // part: 'snippet',
    // videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': '64a4596b67msh9ce0ab93fa99e67p1db0fbjsn9f18d2ae00ee',  
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }  
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);    

  return data; 
}