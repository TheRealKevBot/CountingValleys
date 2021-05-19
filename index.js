/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

let example = {
    steps: 8,
    path: 'UDDDUDUU'
} 

function countingValleys(steps, path) {
    let valleyCount = 0
    let seaLevel = 0
    let p = path.split('')
    // console.log(p) 
    p.forEach(step => {
        if(step === 'U') {
            seaLevel += 1
            if (seaLevel === 0){
                valleyCount += 1
            }
            // console.log('valley:', valleyCount)
            // console.log('sea level:', seaLevel)
        } else {
            seaLevel -= 1
            // console.log('valley:', valleyCount)
            // console.log('sea level:', seaLevel)
        }
    })
    return valleyCount
} 

// countingValleys(example.steps, example.path) 

console.log(countingValleys(example.steps, example.path))