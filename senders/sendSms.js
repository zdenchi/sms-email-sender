const axios = require("axios");

async function sendSms(data) {
  const { SMS_API_KEY, SMS_ALPHA_NAME } = process.env;
  const { to, message } = data;
  const options = {
    url: "https://im.smsclub.mobi/sms/send",
    method: "POST",
    headers: {
      Authorization: `Bearer ${SMS_API_KEY}`,
    },
    data: {
      phone: [to],
      message,
      src_addr: SMS_ALPHA_NAME,
    },
  };
  const response = await axios.request(options);
  return response.data;
}

module.exports = sendSms;
