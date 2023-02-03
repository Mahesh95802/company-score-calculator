const CSVToJSON = require('csvtojson');

const { Company } = require('../models');
const { scoreCalculator } = require('../utils/scoreCalculator');

const fetchCompanyDetails = async (url) => {
    // console.log('fetchCompanyData service called')
    const response = await fetch(url, {
        method: 'GET'
    });
    // // console.log(response)
    const data = await response.text();
    const json = await CSVToJSON().fromString(data);
    // // console.log(json)
    const companyDetails = []
    for (let company of json) {
        const url = `http://54.167.46.10/company/${company.company_id}`
        const companyInfo = await (await fetch(url, {
            method: 'GET'
        })).json();
        // // console.log(companyInfo)
        companyDetails.push({
            companyId: company.company_id,
            companySector: company.company_sector,
            companyName: companyInfo.name,
            // companyDescription: companyInfo.description,
            companyCEO: companyInfo.ceo,
            companyTags: companyInfo.tags
        })
    }
    // console.log("companyDetails", companyDetails)
    // json.forEach(async (company) => {
    //     // // console.log(company)
    //     const url = `http://54.167.46.10/company/${company.company_id}`
    //     const companyInfo = await (await fetch(url, {
    //         method: 'GET'
    //     })).json();
    //     // // console.log(companyInfo)
    //     companyDetails.push({
    //         companyId: company.company_id,
    //         companySector: company.company_sector,
    //         companyName: companyInfo.name,
    //         companyDescription: companyInfo.description,
    //         companyCEO: companyInfo.ceo,
    //         compantTags: companyInfo.tags
    //     })
    //     // // console.log("final", companyDetails)
    // })
    // console.log("companyDetails", companyDetails)
    return await Company.bulkCreate(companyDetails);
    // return companyDetails;
}

const fetchCompanyPerformance = async () => {
    // console.log('fetchCompanyPerformance service called')
    const companyPerformance = []
    const sectors = await Company.findAll(
        {
            attributes: ['companySector'],
            group: ['companySector']
        },
        {
            fields: ['companySector']
        }
    )
    // // console.log("sectors", sectors)
    for (let sector of sectors) {
        if (!sector.companySector) continue;
        const url = `http://54.167.46.10/sector?name=${sector.companySector}`
        const response = await (await fetch(url, {
            method: 'GET'
        })).json();
        // console.log("response", response, sector.companySector)
        for (let company of response) {
            companyPerformance.push({
                companyId: company.companyId,
                companyScore: scoreCalculator(company.performanceIndex),
                // companyMeta: company.performanceIndex
            })
        }
        // response.forEach((company) => {
        //     companyPerformance.push({
        //         companyId: company.companyId,
        //         companyScore: scoreCalculator(company.performanceIndex),
        //         // companyMeta: company.performanceIndex
        //     })
        // })
    }
    // console.log(companyPerformance)
    return companyPerformance;
}


const saveData = async (url) => {
    // console.log('saveData service called')
    const companyDetailsResponse = await fetchCompanyDetails(url)
    // console.log("companyDetails", companyDetailsResponse)
    // await Company.bulkCreate(companyDetailsResponse);
    const companyPerformance = await fetchCompanyPerformance();
    for (let company of companyPerformance) {
        await Company.update(
            { companyPerformance: company.companyScore },
            { where: { companyId: company.companyId } }
        )
    }
    return { companyDetails: companyDetailsResponse, companyPerformance: companyPerformance };
    // return companyPerformance;

}

const fetchCompanyDataBySector = async (sector) => {
    // console.log('fetchCompanyDataBySector service called')
    const companyData = await Company.findAll({
        where: {
            companySector: sector
        },
        order: [['companyPerformance', 'DESC']]
    })
    return companyData;
}

const updateCompanyData = async (companyId, updateBody) => {
    // console.log('updateCompanyData service called')
    // console.log(updateBody, companyId)
    const company = await Company.update(updateBody, {
        where: {
            companyId: companyId
        },
        returning: true,
    })
    return company;
}




module.exports = { saveData, fetchCompanyDataBySector, updateCompanyData };