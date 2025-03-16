export function decimalToBinary(decimal: string): string {
    const num = parseInt(decimal, 10);
    if (isNaN(num)) return "Entrada inválida";
    return num.toString(2);
}
  