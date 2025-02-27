import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const generateAccessToken = (userId: number) => {
  const jwtSecret = process.env.JWT_SECRET;
  const accessExpiresIn = process.env.ACCESS_TOKEN_EXPIRES_IN;

  return jwt.sign({ userId }, jwtSecret, { expiresIn: accessExpiresIn });
};

export const generateRefreshToken = (userId: number) => {
  const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
  const refreshExpiresIn = process.env.REFRESH_TOKEN_EXPIRES_IN;
  return jwt.sign({ userId }, jwtRefreshSecret, {
    expiresIn: refreshExpiresIn,
  });
};
