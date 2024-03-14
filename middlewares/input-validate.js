const { body, validationResult } = require('express-validator');

const validateSignin = (req, res, next) => {
    body('username').trim().notEmpty().withMessage("Username is required")(req, res, next);
    body('password').trim().notEmpty().withMessage("Password is required")(req, res, next);
    
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


// const (req,res,next())

module.exports = { validateSignin };