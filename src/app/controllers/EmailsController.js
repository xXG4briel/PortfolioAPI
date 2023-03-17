const nodemailer = require("nodemailer");

class EmailsController{
  async sendEmail(request, response) {
    console.log(request.body);
    const {
      name, email, text
    } = request.body;


    try {
      const result = await sendEmailContact(name, email, text);
      if (result != null) {
        return response.send(200, { status: 'Ok' });
      }
      response.send(400, { error: 'Email not send' });
    }
    catch {
      response.send(400, { error: 'Email not send' });
    }

  }

  async sendEmailContact(name, from, text){
    let testAccount = await nodemailer.createTestAccount({})
    const { user, pass } = testAccount;
    const transporter = nodemailer.createTestAccount({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: { user, pass },
    })

    return await transporter.sendEmail({
      from, // sender address
      to: process.env.EMAIL_RECIPIENT, // list of receivers
      subject: `Contact Portfolio - ${new Date().toLocaleString('pt-br')}`, // Subject line
      text, // plain text body
      html: text, // html body
    });

  }
}

module.exports = new EmailsController();
