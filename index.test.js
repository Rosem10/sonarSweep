const {sonarSweep, sonarSweepPt2 }= require("./index.js")
const { formattedInput } = require("./input")

describe('sonarSweep pt1', () => {
    it('returns 0 when passed a report of length <= 1', () => {
        expect(sonarSweep([])).toBe(0)
        expect(sonarSweep([199])).toBe(0)
        expect(sonarSweep(formattedInput)).toBe(1521)
    });
    it('returns 1 when passed a report with a length of 2 where the second measurement is larger than the second', () => {
        expect(sonarSweep([199, 200])).toBe(1)
    })
    it('returns the correct count when passed a report with a length of more than 2 where all of the entries are larger than the last', () => { 
        expect(sonarSweep([199, 200, 208, 210, 240])).toBe(4)
    })
    it('returns the correct count when passed a report with a length of more than 2 where some of the entries are larger than the last, and others are not', () => {
        expect(sonarSweep([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toBe(7)
    });
});

describe('sonarSweep pt2', () => { 
    it('returns 1 when passed two three-measurement windows, the second being larger than the first', () => { 
        expect(sonarSweepPt2([
      199, 200, 208, 210])).toBe(1)
    })
    it('returns the correct count when passed multiple three-measurement windows', () => {
        expect(sonarSweepPt2([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toBe(5)
        expect(sonarSweepPt2(formattedInput)).toBe(1543)
    })
})