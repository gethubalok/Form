const nodeMailer=require('../config/form_mailer');

exports.newMail=(data)=>{

    console.log('Inside new mail',data);
    let htmlString=nodeMailer.renderTemplate({
        name:data.name,
        contact_number:data.contact_number,
        email:data.email,
        comment:data.comment
    },'/mail_file.ejs');
    nodeMailer.transporter.sendMail({
        from:'Alok Kumar Maurya',
        to:data.email,
        subject:'Regarding submitting form',
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log('Error in sending email',err);
            return;
        }
        console.log(info);
    });
}


