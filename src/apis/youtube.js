import axios from 'axios';

const KEY = 'AIzaSyArNpUCMe-0m1xp46WLEyaw6P3ATyBJZLY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResult: 5,
        key: KEY
    }
})

