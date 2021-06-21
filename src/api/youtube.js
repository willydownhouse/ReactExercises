import axios from 'axios';

const KEY = 'AIzaSyBTGldopaWUxASXvQAvzhfa7FvOG9zRynY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
