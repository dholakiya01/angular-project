const UserInfo = require('../../../model/user.model');
require('../../config/db');

exports.create = async (req, res) => {
    try {
        const result = await new UserInfo({
            firstname: req.body.firstname,
            lastname: req.body.firstname,
            email: req.body.email,
            password: req.body.password,
        })

        const existemail = await  UserInfo.findOne({email :req.body.email})
        if(existemail){
          return  res.status(401).json({
                status:false,
                message:"User Email already Exists"
            })
        }
        await result.save()
        if (result) {
            res.status(200).json({
                status: true,
                message: "User Created Successfully",
                data: result
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err.message)
    }
}

exports.get = async (req, res) => {
    try {
        const result = await UserInfo.find()
        if (result) {
            res.status(200).json({
                status: true,
                message: "User Created Successfully",
                data: result
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err.message)
    }
}

exports.update = async (req, res) => {
    try {
        const { _id } = req.params
        const result = await UserInfo.updateOne(req.body, _id)
        if (result) {
            res.status(200).json({
                status: true,
                message: "User update Successfully",
                data: result
            })
        }
        else{
            res.status(404).json({
                status: true,
                message: "User Not found",
                data: result
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err.message)
    }
}
exports.remove = async (req, res) => {
    try {
        const { _id } = req.params
        const result = await UserInfo.deleteOne()

        if (result) {
            res.status(200).json({
                status: true,
                message: "User remove Successfully",
                data: result
            })
        }else{
            res.status(404).json({
                status: true,
                message: "User Not found",
                data: result
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err.message)
    }
}