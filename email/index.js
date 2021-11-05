var nodemailer = require('nodemailer');
var moment= require('moment');
var Email = require('../models/email');
const notifier = require('node-notifier');

module.exports=exports=function(){

  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

  // morning notification

  if(moment().format('LTS') == '8:00:00 AM')
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
              user: 'medilonaapp@gmail.com',
              pass: 'password@41'
            }
          });
          
          var mailOptions = {
            from: 'medilonaapp@gmail.com',
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

  if(moment().format('LTS') == '1:00:00 PM')
  {
    console.log("hua");
    Email.find({},function(err, currentmail){

        currentmail.forEach(function(currentEmail){
        
        if(currentEmail.time == '2')
        {

        console.log(currentEmail.email);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'medilonaapp@gmail.com',
              pass: 'password@41'
            }
          });
          
          var mailOptions = {
            from: 'medilonaapp@gmail.com',
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

  if(moment().format('LTS') == '8:00:00 PM')
  {
    console.log("hua");
    Email.find({},function(err, currentmail){

        currentmail.forEach(function(currentEmail){
        
        if(currentEmail.time == '3')
        {

        console.log(currentEmail.email);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'medilonaapp@gmail.com',
              pass: 'password@41'
            }
          });
          
          var mailOptions = {
            from: 'medilonaapp@gmail.com',
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
