const Joi = require("joi");
const { Shop,validate } = require('../models/shop');
const bcrypt = require("bcrypt");
const router = require('express').Router();

router.post('/',async(req,res)=>{
    try {
        const {error}=validate(req.body);
        if(error){
            return res.status(400).send({message:error.details[0].message});
        }
        const shop=await Shop.findOne({email:req.body.email});
        if(shop){
            return res.status(409).send({message:"Shop with given email already exists"});
        }
        const salt=await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword=await bcrypt.hash(req.body.password,salt);
        await new Shop({...req.body,password:hashPassword}).save();
        res.status(201).send({message:"Shop created successfully"});
    }
    catch(error){
        return res.status(500).send({message:error.message});
    }
});

module.exports = router;
