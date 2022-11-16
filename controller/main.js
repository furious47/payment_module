const data = require('../model/data')

const payment = async (req,res)=>{
    try {
        const {id} = req.body
        const User_A = await data.findOne({_id:id}).populate("ReferedUser")

        User_A.isPaymentMade = true
        await User_A.save()
        
        const User_B = await data.findOne({_id:User_A.ReferedUser._id})
        User_B.TotalEarnings += 10

        await User_B.save()


        res.status(200).send('success')
    } catch (error) {
        console.log(error);
        res.status(400).send('error')
    }
}

// to get all users

const get = async (req,res)=>{
    try {
        const User = await data.find({})

        res.status(200).json(User)
    } catch (error) {
        console.log(error);
        res.status(400).send('error')
    }
}

module.exports = {get,payment}