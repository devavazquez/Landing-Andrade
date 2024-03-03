// edff jmmo anpp mzfm
const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
require('dotenv').config()

const app = express()

// app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'luisdanielc569@gmail.com',
      pass: 'edff jmmo anpp mzfm'
    }
  });
  
//   transporter.verify().then(() => {
//     console.log('Ready to send email')
//   })
  
  app.post('/', async (req, res) => {
    try {
      const mail = req.body.mail;
      const body = req.body.body;
      const name = req.body.name;
      const message = req.body.message;
  
      console.log(mail);
  
      const content = `
        <h2>${message}</h2>
      `;
  
      let info = await transporter.sendMail({
        from: 'Mensaje deseado <luisitorey897@gmail.com>', //Mensaje deseado para que no aparezca la direccion del remitente
        to: '201255@ids.upchiapas.edu.mx', //`megabyte9703@gmail.com, ...`
        subject: name,
        html: message,
      });
  
      console.log(info);
  
      if (!info.error) {
        res.send('Mensaje enviado');
      } else {
        console.log(info.error);
        res.send('Error al enviar el mensaje: ', info.error);
      }
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  });
  
  

app.listen(3000, () => console.log('Listen on http://localhost:3000'))