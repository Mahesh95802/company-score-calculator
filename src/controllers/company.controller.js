const companyService = require('../services/company.service');

const saveData = async (req, res) => {
    console.log('saveData called')
    res.send(await companyService.saveData());
}

module.exports = { saveData };