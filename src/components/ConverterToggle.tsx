import { Button } from "@heroui/react";

interface ConverterToggleProps {
  isReversed: boolean;
  setIsReversed: (value: boolean) => void;
  option1: string;
  option2: string;
}

export default function ConverterToggle({ isReversed, setIsReversed, option1, option2 }: ConverterToggleProps) {
  return (
    <Button 
      color="secondary" 
      variant="shadow" 
      onPress={() => setIsReversed(!isReversed)}
    >
      {isReversed ? option2 : option1}
    </Button>
  );
}
