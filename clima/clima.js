const axios = require('axios');

const getClima = async ( lat, lng ) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=f918fe53a03d81ac3f9a748cf32c0265&units=metric`)

    return respuesta.data.main.temp;


};

module.exports = {
    getClima
};