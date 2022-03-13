let axios = require("axios")

//only one city weather and temp

let getCitieWeather = async function (req, res) {
    try {
        let city = ["London"]
        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4b951f429bd187d33826a1f49a49c2e`)

        //console.log(result)


        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }
}



let getTempOnly = async function (req, res) {
    try {
        let city = ["London"]
        //let city = req.params.city_Name

        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4b951f429bd187d33826a1f49a49c2e`);

        console.log(result.data.name)
        console.log(result.data.main.temp)

        //iske help se hum data postman me print karate h (data likh kar line 34)
        let data1 = result.data.name
        let data2 = result.data.main.temp
        
         //let data=result.data.main.temp
        // agar humko city name likhna h to send ke under city:data likdo to postman me city:jo bhi data hoga vo print ho jayega)
        res.status(200).send({ citie:data1, temp: data2, status: true })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }


}

let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityOfArray = []
        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=e4b951f429bd187d33826a1f49a49c2e`)

            console.log(result.data.main.temp)

            obj.temp = result.data.main.temp
            cityOfArray.push(obj)
        }

        let sorted=cityOfArray.sort(function(a, b){ return a.temp -b.temp })

        console.log(sorted)
        res.status(200).send({status:true, data:sorted})
        
    }    
    catch (error) {
        console.log(error)
        res.status(500).send({status:false, msg:"server error"})


        }
    }


module.exports.getCitieWeather = getCitieWeather
module.exports.getTempOnly = getTempOnly
module.exports.getSortedCities = getSortedCities