const ticherShema = require("../module/ticherShema")



const loginTicher = async (req, res)=>{
    const ticher = await ticherShema.findOne(
        {
            name:req.body.name,
            firstName:req.body.fname
        }).lean()
        
        if(ticher && ticher.password == req.body.password){
            res.send({
                status:true
            })
            req.session.ticher = ticher
            req.session.isloggedTicher = true
            req.session.save((e)=>{if(e) throw e})
        }else{
            res.send({
                status:false
            })
        }
}
module.exports = {
    loginTicher
}