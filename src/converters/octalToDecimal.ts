export function octalToDecimal(octal: string): string {
    if (!/^[0-7]+$/.test(octal)) return "Entrada inválida";
    
    let decimal = 0;
    let power = 0;
    for (let i = octal.length - 1; i >= 0; i--) {
        decimal += parseInt(octal[i]) * Math.pow(8, power);
        power++;
    }
    
    return decimal.toString();
}