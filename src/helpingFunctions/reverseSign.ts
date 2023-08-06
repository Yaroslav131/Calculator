export function reverseSign(expression: string) {
    const tokens = expression.match(/(?:(?<!\d)-)?\d+(\.\d+)?|[+\-⨯\/%()]/g);

    if (!tokens) {
        return expression; 
    }

    const lastToken = tokens[tokens.length - 1];

    if (!isNaN(parseFloat(lastToken))) {
        const lastNumber = parseFloat(lastToken);
        const sign = lastNumber >= 0 ? '-' : ''; 
        return expression.replace(/(?:(?<!\d)-)?\d+(\.\d+)?$/, `${sign}${Math.abs(lastNumber)}`);
    }

    return expression;
}