var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'touro.msin.636@gmail.com',
			pass: 'tourocollege'
		}
	});

  var mailOptions = {
     from:'<touro.msin.636@gmail.com>',
     to: 'meenalsaxena20@gmail.com',
     subject:'Contact from Web masters',
     text :'New Submission from: \n Name: '+req.body.name+'\nEmail: '+req.body.email+'\nMessage: \n'+req.body.message,
     html :'<p>New Submission from: </p><ul><li> Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  }

  transporter.sendMail(mailOptions, function(error,info){
    if(error){ return console.log(error);}
    console.log('Message Send: '+info.response);
    res.redirect('/');
  });
});

module.exports = router;
