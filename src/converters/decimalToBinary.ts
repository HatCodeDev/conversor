export function decimalToBinary(decimal: string): { error?: boolean; message?: string; result?: string } {
    const num = parseInt(decimal, 10);
    if (isNaN(num)) return { error: true, message: "Ingrese un número decimal válido" };
    return { result: num.toString(2) };
}
