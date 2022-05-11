const express = require('express');
const path=require('path');

const logger=require('./middleware/logger')

const app=express();

app.use('/api/members',require('./routes/api/members'))

app.use(logger);

const PORT= process.env.PORT || 3300;

app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

