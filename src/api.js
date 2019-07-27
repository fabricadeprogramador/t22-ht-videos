const DEV = 'http://localhost:3000/';
const PROD = 'https://ht-videos-api.herokuapp.com/';
const url = process.env.NODE_ENV === 'production' ? PROD : DEV;
export default { url } 