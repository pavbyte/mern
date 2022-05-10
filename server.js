const express = require('express');
const path=require('path');
const members=require('./Members')


const app=express();


const PORT= process.env.PORT || 3300;

app.use(express.static(path.join(__dirname,'public')))

app.get('/api/members',(req,res)=> {
    res.json(members);
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

