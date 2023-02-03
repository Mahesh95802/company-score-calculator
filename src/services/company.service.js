const CSVToJSON = require('csvtojson');

const { scoreCalculator } = require('../utils/scoreCalculator');

const fetchCompanyDetails = async (url) => {
    console.log('fetchCompanyData service called')
    const response = await fetch(url, {
        method: 'GET'
    });
    // console.log(response)
    const data = await response.text();
    const json = await CSVToJSON().fromString(data);
    // console.log(json)
    const companyDetails = []
    json.forEach(async (company) => {
        // console.log(company)
        const url = `http://54.167.46.10/company/${company.company_id}`
        const companyInfo = await (await fetch(url, {
            method: 'GET'
        })).json();
        companyDetails.push({
            companyId: company.company_id,
            companySector: company.company_sector,
            companyName: companyInfo.name,
            companyDescription: companyInfo.description,
            comapnyCEO: companyInfo.ceo,
            compantTags: companyInfo.tags
        })
    })
    console.log(companyDetails)
    return companyDetails;
}

const fetchCompanyPerformance = async (sectorName) => {
    const companyPerformance = []
    const url = `http://54.167.46.10/sector?name=${sectorName}`
    const response = await (await fetch(url, {
        method: 'GET'
    })).json();
    response.forEach((company) => {
        companyPerformance.push({
            companyId: company.companyId,
            companyScore: scoreCalculator(company.performanceIndex),
            companyMeta: company.performanceIndex
        })
    })
    console.log(companyPerformance)
    return companyPerformance;
}


const saveData = async (url) => {
    console.log('saveData service called')
    const companyDetailsResponse = await fetchCompanyDetails(url);
    const companyPerformance = await fetchCompanyPerformance('Software');
    return {companyDetails: companyDetailsResponse, companyPerformance: companyPerformance};
}





module.exports = { saveData };