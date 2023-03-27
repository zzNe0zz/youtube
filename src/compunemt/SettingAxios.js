import axios from "axios";

const instance = axios.create({
    baseURL: 'https://ytube-videos.p.rapidapi.com',
        headers: {
          'X-RapidAPI-Key': 'b5341c8ef2mshb7ae2bab0d2c987p1f6466jsn019113f5bfbd',
          'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com'
        }
      
  });
  export default instance;