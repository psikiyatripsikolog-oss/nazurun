import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function FaqList({ items, defaultOpen = "item-1" }) {
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen} className="w-full" data-testid="faq-accordion">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b border-rg-bd">
          <AccordionTrigger
            data-testid={`faq-trigger-${i}`}
            className="group py-7 text-left font-heading text-[20px] font-normal text-rg-title hover:no-underline hover:text-rg-link transition-colors duration-300 [&>svg]:hidden max-md:text-[18px] max-md:py-5"
          >
            <span className="pr-6">{f.q}</span>
            <span className="relative w-4 h-4 shrink-0" aria-hidden="true">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1.5px] bg-current" />
              <span className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-[1.5px] bg-current transition-transform duration-300 group-data-[state=open]:scale-y-0" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-[16px] leading-[1.7] text-rg-text pb-7 pr-12 max-md:pr-2">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
