var nodemailer = require('nodemailer');
var moment= require('moment');
var Email = require('../models/email');
const notifier = require('node-notifier');

module.exports=exports=function(){

  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

  if(moment().format('LTS') == '3:10:00 PM')
  {
    console.log("hua");
    Email.find({},function(err, currentmail){

        currentmail.forEach(function(currentEmail){
        
        if(currentEmail.time == '1')
        {

        console.log(currentEmail.email);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'lcs2019052@iiitl.ac.in',
              pass: 'P0@ranaV1'
            }
          });
          
          var mailOptions = {
            from: 'lcs2019052@iiitl.ac.in',
            to: currentEmail.email,
            subject: 'MediLona Reminder',
            text: 'Hey it time to take '+currentEmail.medicine_name+` 
            Your Remarks:-` +currentEmail.msg
          //   html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
          };
          
         
        
          function sendGmail() { transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          }
          
          sendGmail();

          notifier.notify({
            title: 'MediLona',
            message: 'Hey it time to take '+currentEmail.medicine_name+` 
            Your Remarks:-` +currentEmail.msg
          });

        }
        });
        
    });

    
  }

}
