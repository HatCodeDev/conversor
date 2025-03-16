# Conversor

[Prueba en ...](https:...)

## Tecnologías utilizadas

- [Vite](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## Cómo usar

Para clonar el proyecto, ejecuta el siguiente comando:

```bash
git clone https://github.com/HatCodeDev/conversor.git
```

### Instalar dependencias

Puedes usar `npm`, `yarn`, `pnpm` o `bun`. Ejemplo utilizando `npm`:

```bash
npm install
```

### Ejecutar el servidor de desarrollo

```bash
npm run dev
```

## Estructura del proyecto y distribución de tareas

Este proyecto es una aplicación de conversión de bases numéricas utilizando Vite, HeroUI y TailwindCSS. Cada miembro del equipo es responsable de implementar conversiones específicas y diseñar sus respectivas páginas siguiendo la estructura establecida.

### **Distribución de tareas:**

#### **Camila**

- **Tarea:** Implementar la conversión de Decimal a Hexadecimal y Hexadecimal a Decimal.
- **Archivos a modificar:**
  - `src/pages/DecimalToHex.tsx` → Implementación de la UI usando HeroUI.
  - `src/converters/decimalToHex.ts` → Función para convertir Decimal a Hexadecimal.
  - `src/converters/hexToDecimal.ts` → Función para convertir Hexadecimal a Decimal.
- **Instrucciones:**
  - Usar `DecimalToBinary.tsx` como referencia para estructurar la página.
  - Los componentes de HeroUI ya están instalados, solo es necesario importarlos donde se requieran.
  - Mantener los estándares de diseño del proyecto.

#### **Christian**

- **Tarea:** Implementar la conversión de Decimal a Octal y Octal a Decimal.
- **Archivos a modificar:**
  - `src/pages/DecimalToOctal.tsx` → Implementación de la UI usando HeroUI.
  - `src/converters/decimalToOctal.ts` → Función para convertir Decimal a Octal.
  - `src/converters/octalToDecimal.ts` → Función para convertir Octal a Decimal.
- **Instrucciones:**
  - Usar `DecimalToBinary.tsx` como referencia para estructurar la página.
  - Los componentes de HeroUI ya están instalados, solo es necesario importarlos donde se requieran.
  - Asegurar que el diseño y la estructura sean consistentes con el resto del proyecto.

### **Guía general:**

- **Consistencia en UI:**

  - Mantener la misma estructura y diseño de `DecimalToBinary.tsx`.
  - Utilizar los componentes de HeroUI (`Card`, `Input`, `Button`, `Divider`, etc.).
  - Garantizar responsividad y accesibilidad.

- **Buenas prácticas de código:**

  - Escribir código limpio y reutilizable.
  - Mantener la lógica de conversión en `src/converters/`.
  - Implementar validaciones y manejo de errores adecuados en las funciones de conversión.
  - Documentar el codigo realizado

- **Pruebas e integración:**

  - Después de completar cada página, probar en el navegador para asegurarse de que funciona correctamente.
  - Coordinar con el equipo para garantizar una integración sin conflictos, para no instalar algo sin consultar, modificar archivos que no corresponden.
  - Cada miembro del equipo debe subir cambios exclusivamente en su rama asignada:

- **Camila** trabajará en la rama `camila`.

- **Christian** trabajará en la rama `christian`.

### Pasos para subir cambios a su rama:

1. **Asegurar que estás en la rama correcta**

   ```bash
   git checkout camila  # Para Camila
   git checkout christian  # Para Christian
   ```

2. **Actualizar la rama antes de empezar a trabajar**

   ```bash
   git pull origin main 
   ```

3. **Agregar cambios realizados**

   ```bash
   git add .
   ```

4. **Realizar un commit con un mensaje claro**

   ```bash
   git commit -m "[feat] Agregada conversión de Decimal a Hexadecimal"
   ```

5. **Subir cambios a la rama remota**

   ```bash
   git push origin camila  # Para Camila
   git push origin christian  # Para Christian
   ```

6. **Avisar que ya hicieron push**


