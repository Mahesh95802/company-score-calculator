const companyRouter = require('express').Router();

const { saveData, fetchCompanyData } = require('../controllers/company.controller');

companyRouter.post('/api/save', saveData);

companyRouter.get('/company/:id', fetchCompanyData);

module.exports = companyRouter;