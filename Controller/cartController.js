const Cart =require('../model/cart')

// get
exports.getCart = async (req,res)=>{
    try {
        const data = await Cart.find().populate('user').populate('produts')
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// post
exports.postCart = async (req,res)=>{
    try {
        const data = await Cart.create(req.body)
        return res. json({errors:false,data:data})
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}