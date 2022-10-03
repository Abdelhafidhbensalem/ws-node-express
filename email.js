var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'atyuio322@gmail.com',
    pass: '123456POIU'
  }
});

var mailOptions = {
  from: 'atyuio322@gmail.com',
  to: 'bensalemabdelhafidh@gmail.com ',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});