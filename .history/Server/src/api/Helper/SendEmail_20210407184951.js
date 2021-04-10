import nodemailer from "nodemailer";
import {
  EMAIL_SERVICE,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  EMAIL_FROM,
} from "../../../config";

export const sendEmail = (options) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
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

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
};
