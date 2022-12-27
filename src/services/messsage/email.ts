import nodemailer from "nodemailer";

export const sendEmail = async () => {
  let hostname = "xxx";
  let username = "xx";
  let password = "xxx";

  let transporter = nodemailer.createTransport({
    host: hostname,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: username,
      pass: password,
    },
    logger: true,
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"TMIS" <xx>',
    to: "xxxxx",
    subject: "Hello from node",
    text: "Hello world?",
    html: "<strong>Hello world?</strong>",
    headers: { rwanda: "standard" },
  });

  console.log("Message sent: %s", info.response);
};
