describe('test', () => {
    it('true is true', () => expect(true).toBe(true));

    it('always success', () => {
        expect(0).toBe(0);
    });
});

describe('Meaningful Test', () => {
    it('1 + 1 => 2', () => {
        expect(1 + 1).toBe(2);
    });
});