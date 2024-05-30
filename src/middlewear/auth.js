import jwt from "jsonwebtoken";

const authenticateMiddleWear = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Invalid Authorization" });
  }
  token = token.replace("Bearer ", "");
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
