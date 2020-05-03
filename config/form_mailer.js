const nodeMailer=require('nodemailer');
const ejs=require('ejs');
const path=require('path');

let transporter= nodeMailer.createTransport({
    service:'gmail',
    host:'stmp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user: 'myclassroomform@gmail.com',
        pass: 'Google.k.m&123'
    }
});

let renderTemplate=(data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views',relativePath),
        data,
        function(err,template){
            if(err){
                console.log('Error in sending template',err);
                return;
            }
            mailHTML=template;
        }
    )
    return mailHTML;
}

module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}