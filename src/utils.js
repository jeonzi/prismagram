import { adjectives, nouns } from "./words";

// Login 하기 위한 비밀키를 생성해주는 함수
export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};
