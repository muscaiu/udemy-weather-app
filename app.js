const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true //convert data to json
}, (error, response, body) => {
    console.log(body)
})