/**
 * Convierte un número decimal a su equivalente octal usando divisiones sucesivas.
 * @param {string} decimal - Número decimal representado como cadena de caracteres.
 * @returns {{ error?: boolean; message?: string; result?: string }} - Objeto con el resultado octal o un error.
 */
export function decimalToOctal(decimal: string): { error?: boolean; message?: string; result?: string } {
    if (!/^\d+$/.test(decimal)) {
        return { error: true, message: "Ingrese un número decimal válido" };
    }
    let num = parseInt(decimal, 10);
    if (num === 0) {
        return { result: "0" };
    }
    let octal = "";
    while (num > 0) {
        const remainder = num % 8;
        octal = remainder + octal;
        num = Math.floor(num / 8);
    }
    return { result: octal };
}