export function reverseSign(expression: string): string {
    const splitRegex = /(\d+|\⨯|\/|%|[()+-])/g;
    
    let stringArr = expression.match(splitRegex) || [];

    if (!isNaN(parseFloat(stringArr[stringArr.length - 1]))) {
        if (stringArr.length == 1) {
            stringArr[stringArr.length - 1] = (parseFloat(stringArr[stringArr.length - 1]) * -1).toString()
        }
        else if (stringArr[0] == "-" && stringArr.length == 2) {
            stringArr.splice(0, 1)
        }
        else if (stringArr[stringArr.length - 2] == "-") {
            if (stringArr[stringArr.length - 3] && isNaN(parseFloat(stringArr[stringArr.length - 3]))) {
                stringArr.splice(stringArr.length - 2, 1)
            }
            else {
                stringArr[stringArr.length - 2] = "+"
            }

        }
        else if (stringArr[stringArr.length - 2] == "+") {
            stringArr[stringArr.length - 2] = "-"
        }
        else {
            stringArr[stringArr.length - 1] = (parseInt(stringArr[stringArr.length - 1]) * -1).toString()
        }
    }

    return stringArr.join('');
}
