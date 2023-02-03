const companyRouter = require('express').Router();

const { saveData, fetchCompanyDataBySector, updateCompanyData } = require('../controllers/company.controller');
const { saveDataValidator, updateDataValidator } = require('../middleware/company.validator');

companyRouter.post('/api/save', saveDataValidator, saveData);
companyRouter.get('/api/companies', fetchCompanyDataBySector);
companyRouter.put('/api/company/:companyId', updateDataValidator, updateCompanyData);

module.exports = companyRouter;