const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true //convert data to json
}, (error, response, body) => {
    // console.log(JSON.stringify(body.results[0].formatted_address, undefined, 2)) //second parameter is useless, 3-rd is the identation 
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`lat: ${body.results[0].geometry.location.lat}`)
    console.log(`lng: ${body.results[0].geometry.location.lng}`)
})