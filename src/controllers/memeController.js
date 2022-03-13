let axios = require("axios")

let memesList = async function(req, res){
    try{
        let options = {
            method:"get",
            url:`https://api.imgflip.com/get_memes`
        }

    let result= await axios(options);
    console.log(result)//ye teminal me show hoga
    
    //(you can write 14,15 line also to get output OR 16 line only )
    //let data=result.data 
    //res.status(200).send({data: result.data ,status:true})

    res.status(200).send({data: result.data ,status:true})
    
    
    }
    catch (error) {
        console.log(error)
        res.status(500).send({status:false, msg:"server error"})


        }
}


//Meme_handler

let memesHandler = async function(req, res){
    try{
        let options = {
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=87743020&text0=Danger&text1=Dangerous&username=chewie12345&password=meme@123`
        }

    let result= await axios(options);
    console.log(result)//ye teminal me show hoga
    
    //(you can write 14,15 line also to get output OR 16 line only )
    //let data=result.data 
    //res.status(200).send({data: result.data ,status:true})

    res.send({data: result.data ,status:true})
    
    
    }
    catch (error) {
        console.log(error)
        res.status(500).send({status:false, msg:"server error"})


        }
}


module.exports.memesList=memesList
module.exports.memesHandler=memesHandler