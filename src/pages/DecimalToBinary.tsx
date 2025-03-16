import { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import { decimalToBinary } from "@/converters/decimalToBinary";
import { binaryToDecimal } from "@/converters/binaryToDecimal";
import ConverterToggle from "@/components/ConverterToggle";
import { Card, Input, Button, Divider, Alert} from "@heroui/react";

export default function DecimalToBinary() {
  const [isReversed, setIsReversed] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setInput("");   // Limpia el input
    setResult("");  // Limpia el resultado
    setError("");   // Limpia el error
  }, [isReversed]); // Se ejecuta cuando cambia isReversed

  const handleConvert = () => {
    setError(""); // Reinicia el estado de error antes de convertir

    const conversion = isReversed ? binaryToDecimal(input) : decimalToBinary(input);

    if (conversion.error) {
      setError(conversion.message || "Entrada inválida");
      setResult("");
    } else {
      setResult(conversion.result || "");
    }
  };

  return (
    <DefaultLayout>
      <div className="flex justify-center items-center p-4">
        <Card className="w-full max-w-lg bg-gray-100 dark:bg-gray-900 shadow-xl p-6 min-h-[400px] flex flex-col justify-between">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            {isReversed ? "Binario a Decimal" : "Decimal a Binario"}
          </h1>
          
          <Divider className="my-4" />

          <div className="flex flex-col gap-4 flex-grow">
            {error && (
              <Alert color="danger" title={error} />
            )}

            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isReversed ? "Ingrese Binario" : "Ingrese Decimal"}
              className="w-full"
              size="lg"
            />
            <Button 
              color="primary" 
              variant="shadow" 
              onPress={handleConvert}
            >
              Convertir
            </Button>

            <div className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-lg text-center min-h-[50px] break-words">
              {result || "Resultado: "}
            </div>

            <ConverterToggle 
              isReversed={isReversed} 
              setIsReversed={setIsReversed} 
              option1="Cambiar a Binario → Decimal" 
              option2="Cambiar a Decimal → Binario"
            />
          </div>
        </Card>
      </div>
    </DefaultLayout>
  );
}
