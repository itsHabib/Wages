import wageCalc from '../wageCalc'

var HOURLY = 25
var ANNUAL = 52000

describe('A wage calculator', () => {
    it('will output an annual salary based on an hourly rate', () => {
        // Assume given hourly value $25 will produce $52,000
        expect(wageCalc.toAnnual(HOURLY)).toBe(ANNUAL)
    })

    it('will output an hourly rate based on an annual salary', () => {
        expect(wageCalc.toHourly(ANNUAL)).toBe(HOURLY)
    })
})