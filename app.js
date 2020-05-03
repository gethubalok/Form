const express=require('express');
// const path=require('path');
// var nodeMailer = require('nodemailer');
const formMailer=require('./mailers/form_mailers');
const port=process.env.PORT || 3000;
const app=express();
app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));   
app.set('views','./views');  // It is used for going to views folder

app.use(express.urlencoded());
app.use(express.static('assets'));
app.get('/',function(req,res){
    // res.send('Cool.. I am here.');
    res.render('home',{
        title:'Mail Sender App...'
    });
    
});

app.post('/send',function(req,res){
    console.log(req.body.email);
    formMailer.newMail(req.body);
    res.send('<p style="color:blue">We have saved your record...For confirmation check your Email..<br> Thank You..:)</p>');
});

app.listen(port,function(err){
    if(err){
        console.log('Error in running express');
        return;
    }
    console.log('Cool! Its is working');  
})