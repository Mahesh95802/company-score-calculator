const companyService = require('../services/company.service');
const HttpErrors = require('../errors/httperror');

const saveData = async (req, res) => {
    try {
        // console.log('saveData controller called')
        const url = req.body.urlLink;
        if (url.length === 0) throw new HttpErrors('Url is required', 400);
        res.status(201).json(await companyService.saveData(url));
    } catch(err) {
        if (err instanceof HttpErrors) {
            res.status(err.code).json({ 'message': err.message });
        }
        res.status(500).json({ message: err.message })
    }
}

const fetchCompanyDataBySector = async (req, res) => {
    try {
        // console.log('fetchCompanyData controller called')
        const sector = req.query.sector;
        if (sector == null) throw new HttpErrors('Sector is required', 400);
        res.status(200).json(await companyService.fetchCompanyDataBySector(sector));
    } catch(err) {
        if (err instanceof HttpErrors) {
            res.status(err.code).json({ 'message': err.message });
        }
        res.status(500).json({ message: err.message })
    }
}

const updateCompanyData = async (req, res) => {
    try {
        // console.log('updateCompanyData controller called')
        const companyId = req.params.companyId;
        if (companyId == null) throw new HttpErrors('companyId is required', 400);
        res.status(200).json(await companyService.updateCompanyData(companyId, req.body));
    } catch(err) {
        if (err instanceof HttpErrors) {
            res.status(err.code).json({ 'message': err.message });
        }
        res.status(500).json({ message: err.message })
    }
    
}

module.exports = { saveData, fetchCompanyDataBySector, updateCompanyData };