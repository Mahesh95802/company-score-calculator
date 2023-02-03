const companyRouter = require('express').Router();

const { saveData } = require('../controllers/company.controller');

companyRouter.post('/api/save', saveData);

module.exports = companyRouter;