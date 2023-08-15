import { solveMathExpression } from '../src/helpingFunctions/solveMathExpression'; 

describe('solveMathExpression', () => {
    it('should correctly solve simple expressions', () => {
        expect(solveMathExpression('2 + 3')).toEqual('5');
        expect(solveMathExpression('10 - 5')).toEqual('5');
        expect(solveMathExpression('2 ⨯ 3')).toEqual('6');
        expect(solveMathExpression('10 / 2')).toEqual('5');
        expect(solveMathExpression('8 % 3')).toEqual('2');
    });

    it('should handle negative numbers', () => {
        expect(solveMathExpression('-5 + 3')).toEqual('-2');
        expect(solveMathExpression('5 - (-3)')).toEqual('8');
        expect(solveMathExpression('(-2) ⨯ 4')).toEqual('-8');
    });

    it('should handle expressions with multiple operations', () => {
        expect(solveMathExpression('2 + 3 ⨯ 4')).toEqual('14');
        expect(solveMathExpression('(3 + 5) ⨯ 2')).toEqual('16');
        expect(solveMathExpression('2 ⨯ (3 + 4) - 5')).toEqual('9');
        expect(solveMathExpression('(10 - 2) ⨯ (3 + 1)')).toEqual('32');
    });

    it('should handle expressions with decimal numbers', () => {
        expect(solveMathExpression('0.1 + 0.2')).toEqual('0.3');
        expect(solveMathExpression('1.5 ⨯ 2')).toEqual('3');
        expect(solveMathExpression('1.234 ⨯ (5.678 - 3.456)')).toEqual('2.780');
    });

    it('should handle invalid expressions', () => {
        expect(solveMathExpression('2 +')).toBeNull();
    });

    it('should handle division by zero', () => {
        expect(solveMathExpression('5 / 0')).toBeNull();
        expect(solveMathExpression('(8 - 8) / 0')).toBeNull();
    });

    it('should format large numbers using exponential notation', () => {
        expect(solveMathExpression('1000000 + 500000')).toEqual('1.50e+6');
        expect(solveMathExpression('2.5 ⨯ 1000000')).toEqual('2.5e+6');
    });
});
