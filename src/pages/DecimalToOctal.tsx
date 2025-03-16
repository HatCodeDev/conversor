import { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import { decimalToOctal } from "@/converters/decimalToOctal";
import { octalToDecimal } from "@/converters/octalToDecimal";
import ConverterToggle from "@/components/ConverterToggle";
import { Card, Input, Button, Divider, Alert } from "@heroui/react";

export default function DecimalToOctal() {
  const [isReversed, setIsReversed] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setInput("");
    setResult("");
    setError("");
  }, [isReversed]);

  const handleConvert = () => {
    setError("");
    const conversion = isReversed ? octalToDecimal(input) : decimalToOctal(input);

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
            {isReversed ? "Octal a Decimal" : "Decimal a Octal"}
          </h1>
          <Divider className="my-4" />
          <div className="flex flex-col gap-4 flex-grow">
            {error && (
              <Alert color="danger" title={error} />
            )}
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isReversed ? "Ingrese Octal" : "Ingrese Decimal"}
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
              option1="Cambiar a Octal → Decimal" 
              option2="Cambiar a Decimal → Octal"
            />
          </div>
        </Card>
      </div>
    </DefaultLayout>
  );
}
