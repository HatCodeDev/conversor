/**
 * Convierte un número decimal a su equivalente hexadecimal usando divisiones sucesivas.
 * 
 * @param {string} decimal - Número decimal representado como cadena de caracteres.
 * @returns {{ error?: boolean; message?: string; result?: string }} - Objeto con el resultado hexadecimal o un error.
 */
export function decimalToHex(decimal: string): { error?: boolean; message?: string; result?: string } {
    if (!/^\d+$/.test(decimal)) {
        return { error: true, message: "Ingrese un número decimal válido" };
    }
    
    let num = parseInt(decimal, 10);
    
    if (num === 0) {
        return { result: "0" };
    }

    let hex = "";
    const hexChars = "0123456789ABCDEF";

    while (num > 0) {
        const remainder = num % 16;
        hex = hexChars[remainder] + hex; // Agrega el residuo al inicio de la cadena.
        num = Math.floor(num / 16); // Divide el número por 16 y redondea hacia abajo.
    }

    return { result: hex };
}
