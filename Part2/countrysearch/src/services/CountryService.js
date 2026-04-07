import axios from 'axios'


const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"



const get = () => {
   const request =  axios.get(baseUrl);
   return request.then(response => {console.log(response.data); return response.data})
}


export default {
    get, 
}
