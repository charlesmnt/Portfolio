var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

const dotenv = require("dotenv");
dotenv.config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title : title} );
});

router.post('/send', async function(req, res, next) {

  try {

    if (req.body.message === "" || req.body.mail === "") {

      let response = false
      res.json({response});

    } else {
    const MAIL_LOGIN = process.env.Gmailidentifiant;
    const MAIL_PASSWORD = process.env.Gmailpassword;
    const MAIL = process.env.Mail;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: MAIL_LOGIN,
        pass: MAIL_PASSWORD,
      },
    });

      await transporter.sendMail({
      from: '"ProtFolio website 👻"<adresse>',
      to: MAIL,
      subject: "Prise de contact ✔",
      text: "Expéditeur : " +req.body.mail + "Message : " + req.body.message,
      html: `<div><p> Ce message a été envoyé par : ${req.body.mail} </p><p>${req.body.message}</p></div>`
    });

    let response = true
    res.json({response});
  }

  } catch (error) {

    console.log("message non envoyé")
    let response = false
    res.json({response});
  }
});

module.exports = router;
