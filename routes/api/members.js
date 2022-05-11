const express = require('express');
const router = express.Router();
const members=require('../../Members')

router.get('/',(req,res)=> {
    res.json(members);
})

router.get('/:id',(req,res) => {
    // res.send(req.params.id)
    const found= members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id )))
    } else {
        // res.send(`404 not found`)
        res.status(400).json({msg:`no member with the id of ${req.params.id }`});
    }
    
})

module.exports=router;