import axios from 'axios';

const KEY = 'AIzaSyAMuygyhg4N67LcSIl2NFLzjwXRXNvcE7w'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});