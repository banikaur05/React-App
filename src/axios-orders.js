import axios from 'axios';

const instance = axios.create ({
       baseURL: 'https://react-backend-70c63.firebaseio.com/'
})

export default instance;