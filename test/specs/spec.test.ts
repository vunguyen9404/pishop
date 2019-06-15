import { expect ,assert } from 'chai'

describe('A Behavior Deriven Test', () => {
    it('Test name base', () => {
        assert.isTrue(true, 'Should be true');
        expect(true).to.be.a('boolean')
    })
});