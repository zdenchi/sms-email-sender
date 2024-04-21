const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(data) {
  const { from, to, subject, templateName, props } = data;
  const template = require(`../emails/${templateName}`);
  const email = template(props);
  const res = await resend.emails.send({
    from,
    to,
    subject,
    html: email,
  });
  return res;
}

module.exports = sendEmail;
