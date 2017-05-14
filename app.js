const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

//address, callback
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        //lat, lng, callback
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage)
            } else {
                //(°F − 32) * 5/9 = °C 
                var tempToCelsius = Math.round(weatherResults.temperature - 32) * 5 / 9
                console.log(`It's currently ${tempToCelsius}° in ${results.address}.`)
            }
        })
    }
})