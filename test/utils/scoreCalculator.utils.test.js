const { scoreCalculator } = require('../../src/utils/scoreCalculator');

describe('Score Calculator', () => {
    describe('scoreCalculator', () => {
        it('should return correct answer', async () => {
            const mockPerformance = [{
                "key": "cpi",
                "value": 0.2
            }, {
                "key": "cf",
                "value": 50000
            },{
                "key": "mau",
                "value": 0.1
            },{
                "key": "roic",
                "value": 20
            }]
            expect(scoreCalculator(mockPerformance)).toEqual(7);
        });
    });
});
