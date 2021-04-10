import nodemailer from "nodemailer";
import {
  EMAIL_SERVICE,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  EMAIL_FROM,
} from "../../../config";

export const sendEmail = (options) => {
  return new Promise((resolve, reject) => {
    const client = nodemailer.createTransport({
      service: EMAIL_SERVICE,
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      },
    });

    // const mailOptions = {
    //   from: EMAIL_FROM,
    //   to: options.to,
    //   subject: options.subject,
    //   html: options.text,
    // };

    var email = {
      from: "shamrozwarraich@gmail.com",
      to: "shamrozwarraich@gmail.com",
      subject: "Hello",
      text: "Hello world",
      html: "<b>Hello world</b>",
    };

    client.sendMail(email, function (err, info) {
      if (err) {
        console.log(err);
        reject({ error: "Something Wrong with the mail server..." });
      } else {
        console.log(info);
        resolve(true);
      }
    });
  });
};
