
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Conversor de&nbsp;</span>
          <span className={title({ color: "violet" })}>sistemas numericos&nbsp;</span>
          <br />  
          <div className={subtitle({ class: "mt-4" })}>
            Realiza conversiones entre binario, decimal, octal y hexadecimal
          </div>
          <div className="mt-8">
            <p>Integrantes del team:</p>
            <p className="mt-2"><Code>Misael Reynoso Aguayo</Code></p>
            <p className="mt-2"><Code>Camila Serrano Trinidad</Code></p>
            <p className="mt-2"><Code>Christian Luna Ortiz</Code></p>
          
        </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
