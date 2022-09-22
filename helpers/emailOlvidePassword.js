import nodemailer from 'nodemailer';

const emailOvidePassword = async (datos) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const {email, nombre, token} = datos;

  // Enviar el email
  const info = await transporter.sendMail({
    from: 'APV Administrador de Pacientes de Veterinaria',
    to: email,
    subject: 'Reestablece tu Password',
    text: 'Reestablece tu Password',
    html: `<p>Hola <strong> ${nombre} </strong>, has solicitado reestablecer tu password. </p>
      <p>Sigue el siguiente enlace para establecer tu password:
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
      </p>

      <p>Si no solicitaste cambiar tu password, por favor responde este mensaje.</p>
    
    `,
  });
  console.log("Mensaje enviado: %s", info.messageId);
};

export default emailOvidePassword;
