const axios = require('axios');


const getLugarLatLng = async( direction ) => {

    const encodeUrl = encodeURI( direction );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        timeout: 1000,
        headers: {
            'x-rapidapi-host' : 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key' : 'b158035254msheaead8bae17f521p1f978djsne88985fa2cc0'
        }
    });

    const resp = await instance.get('');

    if ( resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direction }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

};

module.exports = {
    getLugarLatLng
};


