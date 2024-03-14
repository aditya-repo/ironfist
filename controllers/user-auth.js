const { default: mongoose } = require('mongoose')
const User = require('../mongodb/user')

const getSignup = (req,res)=>{
    res.status(405).json({ "status":405,"message":"request not allowed"})
}

const postSignup = async (req,res)=>{
    const {username, password, repassword} = req.body

    const checkUser = await User.findOne({username})

    if (checkUser) {
        return res.json({"error": `userid: '${checkUser.username}' already exists`})
    }

    const newUser = new User({
        username, password
    })

    const response = await newUser.save()

    res.json({"message": response})
}

const getSignin = (req,res)=>{
    res.status(405).json({ "status":405,"message":"request not allowed"})
}

const postSignin = async (req,res)=> {
    const {username, password} = req.body

    const newUser = new User({
        username, password
    })

    const response = await newUser.save()


    res.json({"message": response})
}

module.exports = {getSignup, postSignup, getSignin, postSignin}