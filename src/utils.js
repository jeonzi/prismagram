import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

// Login 하기 위한 비밀키를 생성해주는 함수
export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

// 생성된 secret key를 nodemailer를 사용해서 메일보내기
const sendMail = email => {
  const options = {
    auth: {
      //   api_user: "SENDGRID_USERNAME",
      //   api_key: "SENDGRID_PASSWORD"
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "jeonzi@prismagram.com",
    to: address,
    subject: "🔒 Login Secret for Prismagram 🔒",
    html: `Hello! Your login secret it ${secret}.<br/>Copy paste on the app/website to Login`
  };
  return sendMail(email);
};
