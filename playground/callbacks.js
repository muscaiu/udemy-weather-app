var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Chris'
    }

    setTimeout(() => {
        callback(user)
    }, 3000)
}

getUser(31, (userObject) => {
    console.log(userObject)
})

//https://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard street philadelphia