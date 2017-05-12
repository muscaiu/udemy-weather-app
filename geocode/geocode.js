const request = require('request')

var geocodeAddress = (address) => {

    var encodedAddress = encodeURIComponent(address)

    request({
        // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true //convert data to json
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to Google Servers')
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find that address')
        } else if (body.status === 'OK') {
            // console.log(JSON.stringify(body.results[0].formatted_address, undefined, 2)) //second parameter is useless, 3-rd is the identation 
            console.log(`Address: ${body.results[0].formatted_address}`)
            console.log(`lat: ${body.results[0].geometry.location.lat}`)
            console.log(`lng: ${body.results[0].geometry.location.lng}`)
        }
    })
}
module.exports = {
    geocodeAddress
}