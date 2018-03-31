import compute from './compute';

describe('compute', () => {
    it('should return 0 if negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should increment if positive', () => {
        const result = compute(3);
        expect(result).toBe(4);
    });
});
