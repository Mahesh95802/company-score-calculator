const HttpErrors = require('../errors/httperror');

const saveDataSchema = Joi.object({
    urlLink: Joi.string().min(3).max(30).required(),
  });

const saveDataValidator = (req, res, next) => {
    try {
      const { error } = saveDataSchema.validate(req.body);
      if (error) {
        throw new HttpErrors(error.details[0].message, 400);
      }
      else {
        next();
      }
    }
    catch (err) {
      if (err instanceof HttpErrors) {
        res.status(err.code).json({ 'message': err.message });
      }
      else
        res.status(500).json({ 'message': 'Internal server error.' });
    }
};

module.exports = { saveDataValidator };
