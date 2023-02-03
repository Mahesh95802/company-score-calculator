const companyRouter = require('express').Router();

const { saveData, fetchCompanyDataBySector, updateCompanyData } = require('../controllers/company.controller');

companyRouter.post('/api/save', saveData);
companyRouter.get('/api/companies', fetchCompanyDataBySector);
companyRouter.put('/api/company/:companyId', updateCompanyData);

module.exports = companyRouter;