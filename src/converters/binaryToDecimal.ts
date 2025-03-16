export function binaryToDecimal(binary: string): string {
    if (!/^[01]+$/.test(binary)) return "Entrada inválida";
    return parseInt(binary, 2).toString();
  }
  