
// TODO create a solid algorithm that solves almost all edge cases
export default function commatize(num) {
    let stringNum = num.toString()
    // Reverse number and turn into array of strings
    // get rid of last three elements which account
    // for the decimal and two digits after it
    let reversedNum = (parseInt(num) + "").split("").reverse()
    let length = reversedNum.length
    let numOfCommas
    if (length % 3 === 0) {
        numOfCommas = parseInt(length / 3) -1

    } else {
        numOfCommas = parseInt(length / 3)
    }
    console.log(`Number: ${num}`)
    console.log(`Length: ${length}`)
    console.log(`Num of Commas: ${numOfCommas}`)
    if (length >= 4) {
        let insertAt = 3
        reversedNum.splice(insertAt, 0, ",")
        for (let i = 2; i <= numOfCommas; i++) {
            // insert a comma at the next digit 
            // after every thrid
            insertAt += 4
            console.log('Index: '+ i)
            console.log('Inserting at: '+(insertAt))
            reversedNum.splice(insertAt, 0, ",")

            

        }

        return reversedNum.reverse().join("")

    }
}
