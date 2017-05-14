const request = require('request')

var geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address)

    request({
        // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true //convert data to json
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google Servers')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address')
        } else if (body.status === 'OK') {
            callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
                // console.log(`Address: ${body.results[0].formatted_address}`)
                // console.log(`lat: ${body.results[0].geometry.location.lat}`)
                // console.log(`lng: ${body.results[0].geometry.location.lng}`)
        }
    })
}

module.exports = {
    geocodeAddress
}

//API KEY: 84533391aa6c37073fae49e648229a7c
//URL: https://api.darksky.net/forecast/84533391aa6c37073fae49e648229a7c/37.8267,-122.4233