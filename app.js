
const info = require('./info/info');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

info.getInfo( argv.address )
    .then(console.log)
    .catch(console.log);


