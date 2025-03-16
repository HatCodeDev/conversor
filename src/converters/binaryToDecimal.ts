export function binaryToDecimal(binary: string): { error?: boolean; message?: string; result?: string } {
    if (!/^[01]+$/.test(binary)) return { error: true, message: "Ingrese un número binario válido" };
    return { result: parseInt(binary, 2).toString() };
}
