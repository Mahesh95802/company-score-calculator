// const { HttpErrors } = require('../../src/errors/httperror');
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
        it('should return 400 when empty url', async () => {
            jest.spyOn(CompanyService, 'saveData').mockResolvedValue([{ id: 1}]);
            const mockReq = {
                body: {
                    "urlLink": ""
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            await CompanyController.saveData(mockReq, mockRes);
            expect(mockRes.status().json).toBeCalledWith({ message: 'Url is required' });
            expect(mockRes.status).toBeCalledWith(400);
        })
        it('should return 500 when no url is given', async () => {
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
        it('should return 400 when sector is undefined', async () => {
            jest.spyOn(CompanyService, 'fetchCompanyDataBySector').mockResolvedValue([{ id: 1}]);
            const mockReq = {
                query: {
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            await CompanyController.fetchCompanyDataBySector(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.status().json).toBeCalledWith({ message: 'Sector is required' });
        })
        it('should return 500 when body not present', async () => {
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
        it('should return 400 when id not present in params ', async () => {
            jest.spyOn(CompanyService, 'updateCompanyData').mockResolvedValue([{ id: 1}]);
            const mockReq = {
                params: { },
                body: {
                    "companyCEO": "Hii"
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
              };
            await CompanyController.updateCompanyData(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.status().json).toBeCalledWith({ message: 'companyId is required' });
        })
        it('should return 500 when params not present', async () => {
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
