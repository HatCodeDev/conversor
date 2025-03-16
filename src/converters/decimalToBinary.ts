/**
 * Convierte un número decimal a su equivalente binario usando divisiones sucesivas.
 * 
 * @param {string} decimal - Número decimal representado como cadena de caracteres.
 * @returns {{ error?: boolean; message?: string; result?: string }} - Objeto con el resultado binario o un error.
 */
export function decimalToBinary(decimal: string): { error?: boolean; message?: string; result?: string } {
    if (!/^\d+$/.test(decimal)) {
        return { error: true, message: "Ingrese un número decimal válido" };
    }
    let num = parseInt(decimal, 10);
    // Manejamos el caso especial de cero ya que no su división es indeterminada
    if (num === 0) {
        return { result: "0" };
    }
    let binary = ""; 
    while (num > 0) {
        const remainder = num % 2; // Obtiene el residuo (0 o 1).
        binary = remainder + binary; // Agrega el residuo al inicio de la cadena.
        num = Math.floor(num / 2); // Divide el número por 2 y redondea hacia abajo.
    }
    return { result: binary };
}
