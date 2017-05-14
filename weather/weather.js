var request = require('request')

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/84533391aa6c37073fae49e648229a7c/${lat},${lng}`,
        json: true //convert data to json
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('unable to fetch weather')
        }
    })
}

module.exports.getWeather = getWeather
    // module.exports = {
    //     getWeather
    // }