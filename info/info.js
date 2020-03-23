
const lugar = require('./../lugar/lugar');
const clima = require('./../clima/clima');

const getInfo = async ( descripcion ) => {

    try {

        const coords = await lugar.getLugarLatLng( descripcion );
        const temp = await clima.getClima( coords.lat, coords.lng );

        return `El clima de ${ descripcion } es de ${ temp } grados`;

    }catch (e) {
        return `No se pudo determinar el clima de ${ descripcion }`;
    }

};

module.exports = {
    getInfo
};