const companyService = require('../services/company.service');

const saveData = async (req, res) => {
    console.log('saveData controller called')
    const url = req.body.urlLink;
    res.send(await companyService.saveData(url));
}

const fetchCompanyData = async (req, res) => {
    console.log('fetchCompanyData controller called')
    const id = req.params.id;
    res.send(await companyService.fetchCompanyData(id));
}

module.exports = { saveData, fetchCompanyData };