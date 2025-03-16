/**
 * Convierte un número binario a su equivalente decimal.
 * 
 * El proceso se hace manualmente aplicando la fórmula:
 * decimal = b_n * 2^n + b_{n-1} * 2^{n-1} + ... + b_1 * 2^1 + b_0 * 2^0.
 *
 * @param {string} binary - Número binario representado como cadena de caracteres (solo 0 y 1).
 * @returns {{ error?: boolean; message?: string; result?: string }} - Objeto con el resultado decimal o un error.
 */
export function binaryToDecimal(binary: string): { error?: boolean; message?: string; result?: string } {
    if (!/^[01]+$/.test(binary)) {
        return { error: true, message: "Ingrese un número binario válido" };
    }

    let decimal = 0;
    const length = binary.length;

    for (let i = 0; i < length; i++) {
        const bit = parseInt(binary[i]); // Extraemos el bit (0 o 1)
        const power = length - 1 - i; // Calculamos la potencia de 2
        decimal += bit * Math.pow(2, power); // Suma el valor ponderado
    }
    return { result: decimal.toString() };
}
