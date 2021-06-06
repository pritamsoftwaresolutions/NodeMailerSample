var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'srinathvangari@gmail.com',
//     pass: '**********'
//   }
// });

var transporter = nodemailer.createTransport({
  service: 'gmail',
  port:465,
  secure: true, // true for 465, false for other ports
  logger: true,
  debug: true,
  secureConnection: false,
  auth: {
      user: 'srinathvangari@gmail.com', // generated ethereal user
      pass: '******' // generated ethereal password
  },
  tls:{
      rejectUnAuthorized:true
  }
})

var mailOptions = {
  from: 'srinathvangari@gmail.com',
  to: 'srinathvangari@yahoo.com',
  subject: 'Hello NOEMAIL TEST',
  text: `HI Hello Thank node mail`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
