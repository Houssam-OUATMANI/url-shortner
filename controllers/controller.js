const express =require('express')
const tinyUrl = require('tinyurl')
const {Router} = express
const router = Router()

router.get('/' ,(req ,res)=>{
    res.render('home')
})

router.post('/', async(req,res)=>{
    
    try{
        const shortProcess = await tinyUrl.shorten(req.body.url)
        const response = await shortProcess
        res.render('home', {response})
    }catch{
        throw new Error('Something goes wrong')
    }
})


module.exports = router