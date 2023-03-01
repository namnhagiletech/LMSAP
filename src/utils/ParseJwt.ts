import { Buffer } from "buffer";

const ParseJwt = (token: string) => {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
};

export default ParseJwt;
