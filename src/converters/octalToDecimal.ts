/**
 * Convierte un número octal a su equivalente decimal manualmente.
 * @param {string} octal - Número octal representado como cadena de caracteres.
 * @returns {{ error?: boolean; message?: string; result?: string }} - Objeto con el resultado decimal o un error.
 */
export function octalToDecimal(octal: string): { error?: boolean; message?: string; result?: string } {
    if (!/^[0-7]+$/.test(octal)) {
        return { error: true, message: "Ingrese un número octal válido" };
    }
    let decimal = 0;
    const length = octal.length;
    for (let i = 0; i < length; i++) {
        const digit = parseInt(octal[i]);
        const power = length - 1 - i;
        decimal += digit * Math.pow(8, power);
    }
    return { result: decimal.toString() };
}