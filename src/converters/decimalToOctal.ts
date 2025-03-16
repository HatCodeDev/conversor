export function decimalToOctal(decimal: string): string {
    let num = parseInt(decimal, 10);
    if (isNaN(num) || num < 0) return "Entrada inválida";
    
    let octal = "";
    while (num > 0) {
        octal = (num % 8) + octal;
        num = Math.floor(num / 8);
    }
    
    return octal || "0";
}