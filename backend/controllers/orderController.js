exports.createOrder=(req,res,next)=>{
    res.json({
        name:'createOrder',
        statuscode:200,
        data:[
            {
                message:"Get create order Api Working!"
            }
        ]
      })
}