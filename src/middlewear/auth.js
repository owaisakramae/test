import jwt from "jsonwebtoken";
import TokenModel from "../model/Auth/token.js";

const authenticateMiddleWear = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Invalid Authorization" });
  }
  token = token.replace("Bearer ", "");
  const tokenCheck = await TokenModel.findOne({
    where: {
      token,
    },
  });
  if (!tokenCheck) {
    return res.status(401).json({ message: "Invalid Authorization" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_Key);
    console.log(decoded);
    req.user = decoded;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid Authorization" });
  }

  next();
};

export default authenticateMiddleWear;
