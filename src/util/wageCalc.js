// Wage calculator object that will hold two funcitons
// 1 to go from hourly to annual and the other
// to go from annual to hourly, functions assume individual
// is working 40 hours a week for 52 weeks
import { WEEKS, HOURS_PER_WEEK } from '../constants'
const wageCalc = {
    toAnnual(hourlyRate) {
        return ((hourlyRate * HOURS_PER_WEEK * WEEKS) * 1.00).toFixed(2)
    },
    toHourly(annualSalary) {
        return ((annualSalary / (WEEKS * HOURS_PER_WEEK)) * 1.00).toFixed(2)
    }
}

module.exports = wageCalc