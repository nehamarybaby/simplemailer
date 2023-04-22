express = require('express');


PORT = 3000;
app = express();

// Load the nodemailer module
var nodemailer = require('nodemailer');

// Create a nodemailer transporter with your SMTP configuration
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'harigovindyearzero@gmail.com',
    pass: ''
  }
});

// Create an object containing the message options
var mailOptions = {
  from: 'harigovindyearzero@gmail.com',
  to: 'harigovind3020@gmail.com',
  subject: 'ICT Assigment to send a mail to a friend',
  text: 'This is a test email from your Express.js app!'
};

app.get('/sendmail',(req,res) => {

    // Use the transporter to send the email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send(`Mail Not Send -> ${error}`)
    } else {
      console.log('Email sent: ' + info.response);
      res.send("Mail Send Successfully")
    }
  });

})






app.listen(PORT,() => {
    console.log(`server listening at ${PORT}`)
})