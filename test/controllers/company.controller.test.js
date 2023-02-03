const { HttpErrors } = require('../../src/errors/httperror');
const { saveData, fetchCompanyDataBySector, updateCompanyData } = require('../../src/controllers/company.controller');
const CompanyService = require('../../src/services/company.service');
const CompanyController = require('../../src/controllers/company.controller');

describe('Company Controller', () => {
    describe('saveData', () => {
        it('should return 201', async () => {
            jest.spyOn(CompanyService, 'saveData').mockResolvedValue([{ id: 1}]);
            const mockReq = {
                body: {
                    "urlLink": "Hii"
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            await CompanyController.saveData(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(201);
            expect(mockRes.status().json).toBeCalledWith([{ id: 1 }]);
        })
        it('should return 500', async () => {
            jest.spyOn(CompanyService, 'saveData').mockResolvedValue([{ id: 1}]);
            const mockReq = {
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            await CompanyController.saveData(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(500);
        })
    });
    describe('fetchCompanyDataBySector', () => {
        it('should return 200', async () => {
            jest.spyOn(CompanyService, 'fetchCompanyDataBySector').mockResolvedValue([{ id: 1}]);
            const mockReq = {
                query: {
                    "sector": "Hii"
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            await CompanyController.fetchCompanyDataBySector(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.status().json).toBeCalledWith([{ id: 1 }]);
        })
        it('should return 500', async () => {
            jest.spyOn(CompanyService, 'fetchCompanyDataBySector').mockResolvedValue([{ id: 1}]);
            const mockReq = {
                body: {
                    "urlLink": "Hii"
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            await CompanyController.fetchCompanyDataBySector(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(500);
        })
    });
    describe('updateData', () => {
        it('should return 200', async () => {
            jest.spyOn(CompanyService, 'updateCompanyData').mockResolvedValue([{ id: 1}]);
            const mockReq = {
                params: {
                    "companyId": 1
                },
                body: {
                    "companyCEO": "Hii"
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
              };
            await CompanyController.updateCompanyData(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.status().json).toBeCalledWith([{ id: 1 }]);
        })
        it('should return 500', async () => {
            jest.spyOn(CompanyService, 'updateCompanyData').mockResolvedValue([{ id: 1}]);
            const mockReq = {
                body: {
                    "companyCEO": "Hii"
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
              };
            await CompanyController.updateCompanyData(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(500);
        })
    });
});
