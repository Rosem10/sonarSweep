function sonarSweep(report) { 
    let count = 0

    report.map((entry, index) => { 
        if(entry > report[index - 1]){ 
            count++
        }
    })
    return count
}

function sonarSweepPt2(report) { 
    return sonarSweep(report.map((num, index) => {
         return report.slice(index, index + 3).reduce((total, current) => { 
            return total+= current
        })
    }).filter((num) => num !== undefined))
}

module.exports = {sonarSweep, sonarSweepPt2}
