const express = require('express');
const router = express.Router();
const uuid=require('uuid')
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

router.post('/',(req,res) => {
    const newMember= {
        id: uuid.v4(),
        name: req.body.name,
        email:req.body.email
    };

    if(!newMember.name || !newMember.email){
        return res.statusCode(400).json({msg:'Please include a name and an email'})
    }

    members.push(newMember);
    res.json(members);
})

router.put('/:id',(req,res)=>{
    const found= members.some(member => member.id=== parseInt(req.params.id))

    if(found){
        const updMember =req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name= updMember.name? updMember.name : member.name;
                member.email=updMember.email? updMember.email : member.email;

            res.json(members);
            }
        })
    } else {
        res.status(404).json({msg:'no id present in the datastore'})
    }
})

router.delete('/:id',(req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
        res.json({msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: ' bad request id not found'})
    }
})

module.exports=router;