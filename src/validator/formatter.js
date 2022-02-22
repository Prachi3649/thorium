function trim(){
    let name=" prachi singh"
    let result= name.trim()
    console.log(result)
}

function convert(){
    let strig ='Functionup'
    let lowercase =strig.toLowerCase()
    let uppercase= strig.toUpperCase()
    console.log(lowercase,uppercase)
}

module.exports.trim=trim
module.exports.convert=convert