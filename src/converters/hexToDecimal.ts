/**
 * Convierte un número hexadecimal a su equivalente decimal.
 * 
 * El proceso se hace aplicando la fórmula:
 * decimal = h_n * 16^n + h_{n-1} * 16^{n-1} + ... + h_1 * 16^1 + h_0 * 16^0.
 *
 * @param {string} hex - Número hexadecimal representado como cadena de caracteres (0-9, A-F).
 * @returns {{ error?: boolean; message?: string; result?: string }} - Objeto con el resultado decimal o un error.
 */
export function hexToDecimal(hex: string): { error?: boolean; message?: string; result?: string } {
    if (!/^[0-9A-Fa-f]+$/.test(hex)) {
        return { error: true, message: "Ingrese un número hexadecimal válido" };
    }

    let decimal = 0;
    const length = hex.length;

    for (let i = 0; i < length; i++) {
        const digit = parseInt(hex[i], 16); // Convierte el dígito hexadecimal a decimal
        const power = length - 1 - i; // Calcula la potencia de 16
        decimal += digit * Math.pow(16, power); // Suma el valor ponderado
    }

    return { result: decimal.toString() };
}
