const dataValidator = require('../../src/middleware/company.validator');

describe('Task Validator', () => {
    describe('savedateValidator', () => {
        it('should return 400 when invalid body is given', async () => {
            const mockReq = {
                body: {
                    companyId: 'abc'
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            const next = jest.fn();
            dataValidator.saveDataValidator(mockReq, mockRes);
            dataValidator.saveDataValidator(mockReq, mockRes, () => {});
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.status().json).toHaveBeenCalledWith({ "message": "\"urlLink\" is required" });
            expect(next).not.toBeCalled();
        });
        it('should return 500 when body is not given', async () => {
            const mockReq = {
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            const next = jest.fn();
            dataValidator.saveDataValidator(mockReq, mockRes);
            dataValidator.saveDataValidator(mockReq, mockRes, () => {});
            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.status().json).toHaveBeenCalledWith({ message: "Internal server error." });
            expect(next).not.toBeCalled();
        });
    });
    describe('updateDataValidator', () => {
        it('should return 400 when invalid body is given', async () => {
            const mockReq = {
                body: {
                    companyId: 'abc'
                }
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            const next = jest.fn();
            dataValidator.updateDataValidator(mockReq, mockRes);
            dataValidator.updateDataValidator(mockReq, mockRes, () => {});
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.status().json).toHaveBeenCalledWith({ "message": "\"companyId\" is not allowed" });
            expect(next).not.toBeCalled();
        });
        it('should return 500 when body is not given', async () => {
            const mockReq = {
            };
            const mockRes = {
                status: jest.fn().mockReturnValue({ json: jest.fn() })
            };
            const next = jest.fn();
            dataValidator.updateDataValidator(mockReq, mockRes);
            dataValidator.updateDataValidator(mockReq, mockRes, () => {});
            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.status().json).toHaveBeenCalledWith({ message: "Internal server error." });
            expect(next).not.toBeCalled();
        });
    });
});