import axios from 'axios'

const KEY = 'AIzaSyCM_Z2wabyIlEa5PZXA2dnYZei4KJd-Yis';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})