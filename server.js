const express = require('express');
const path=require('path');
const members=require('./Members')
const logger=require('./middleware/logger')

const app=express();


app.use(logger);

const PORT= process.env.PORT || 3300;

app.use(express.static(path.join(__dirname,'public')))


app.get('/api/members',(req,res)=> {
    res.json(members);
})

app.get('/api/members/:id',(req,res) => {
    // res.send(req.params.id)
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

