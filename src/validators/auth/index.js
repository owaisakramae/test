import Joi from "joi";

const authValidators = {
  signUp: (req, res, next) => {
    const schema = Joi.object({
      firstName: Joi.string().min(3).max(20).required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{7,30}$"))
        .required(),
    });
    const { value, error } = schema.validate(req.body);
    console.log(value);
    if (error) {
      return res.status(400).json({
        message: "Invalid Data",
        error,
      });
    }
    next();
  },
};
export default authValidators;
