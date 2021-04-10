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

    const mailOptions = {
      from: EMAIL_FROM,
      to: options.to,
      subject: options.subject,
      html: options.text,
    };

    client.sendMail(mailOptions, function (err, info) {
      if (err) {
        reject({ error: "Something Wrong with the mail server..." });
      } else {
        resolve(true);
      }
    });
  });
};
