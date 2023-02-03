// const { HttpErrors } = require('../../src/errors/httperror');
const CompanyService = require('../../src/services/company.service');
const { Company } = require('../../src/models');

describe('Company Controller', () => {
    describe('saveData', () => {
        it('should return 201', async () => {
            jest.spyOn('fetchCompanyDetails').mockResolvedValue([{ id: 1 }]);
            jest.spyOn('fetchCompanyPerformance').mockResolvedValue([{ id: 1 }]);
            const companyData = await CompanyService.saveData();
            expect(companyData).toEqual([{ id: 1 }]);
        });
    });
    describe('fetchCompanyDataBySector', () => { });
    describe('updateCompanyData', () => { });
});
