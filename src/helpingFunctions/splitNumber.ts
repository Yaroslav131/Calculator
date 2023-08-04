export default function splitNumber(number: string) {
    if (number.length > 3) {
        let result: string[] = []
        let sllitedNum = number.split('')
        let counter = 0;

        for (let index = sllitedNum.length; index >= 0; index--) {
            result.unshift(sllitedNum[index])

            if (counter === 3) {
                result.unshift(" ")

                counter = 0
            }
            counter++
        }
        number = result.join('')
    }
    
    return number
}