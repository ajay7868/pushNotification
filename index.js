const express = require('express');
const webpush =require('web-push');
const bodyParser = require('body-parser');
const app =express();
const path = require('path');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")))

const publicVapidkey='BDJe3pWZD9dmg34iO0lOz3sXRiTrgYF3G5bAPGlKt6DhIyRLlT_irb4hENUNbrmO_ZbyuxHwdTh7uqjTRII6muY';
const privateVapidKey='emIyFQ1FrGXEDkUL_0sXSi7xIJDM-9O-MajplsNBSIY';

webpush.setVapidDetails('mailto:yadav7868@gmail.com',publicVapidkey,privateVapidKey)

app.post('/subscribe',(req,res)=>{

    const subscription = req.body;
    
    res.status(201).json({});

    const payload = JSON.stringify({title:'test push '});

    webpush.sendNotification(subscription,payload).catch(err=> console.log(err));
})
const port =5000;
    app.listen(port,()=>console.log(`server start on port ${port}`))