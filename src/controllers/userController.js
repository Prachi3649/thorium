const UserModel = require("../models/userModel")




const basicCode = async function (req, res) {
    try {
        let tokenDataInHeaders = req.headers.token
        console.log(tokenDataInHeaders)

        console.log("HEADER DATA ABOVE")
        console.log("hey man, congrats you have reached the Handler")
        res.send({ msg: "This is coming from controller (handler)" })
    }
    catch (error) 
    {
        res.status(401).send({ msg: "token not found" })
    }

}

    const createUser = async function (req, res) {
        try {
            let data = req.body
            let savedData = await UserModel.create(data)
            res.send({ msg: savedData })
            if (Object.keys(data).length != 0)
                res.status(201).send({ msg: "data found" })
            else res.status(400).send({ msg: "No data found" })
        }

        catch (error) 
        {
            res.status(401).send({ msg: "token not found" })
        }
    }

        const getUsersData = async function (req, res) {
            try {
                let allUsers = await UserModel.find()
                res.send({ msg: allUsers })

                if (Object.keys(data).length != 0)
                    res.status(201).send({ msg: "data found" })

                else res.status(400).send({ msg: "No data found" })
            }

            catch (error) 
            {
                res.status(401).send({ msg: "token not found" })
            }

        }
        
module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
module.exports.basicCode = basicCode