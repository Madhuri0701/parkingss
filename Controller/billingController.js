const Billing = require('../model/billing')

// get
exports.getBilling = async (req,res)=>{
    try {
        const data = await Billing.find().populate('user')
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// post
exports.postBilling = async (req,res)=>{
    try {
        const data = await Billing.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}