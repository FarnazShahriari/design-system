Stacked disclosure sections, e.g. FAQs.

```jsx
<Accordion type="single" defaultValue="a">
  <AccordionItem value="a"><AccordionTrigger>How do we start?</AccordionTrigger><AccordionContent>…</AccordionContent></AccordionItem>
</Accordion>
```

Parts: `AccordionItem`, `AccordionTrigger`, `AccordionContent`.

Props: `type?: "single" | "multiple"; collapsible?: boolean; value?: string | string[]; defaultValue?: string | string[]; onValueChange?: (v: any) => void; className?: string; children?: React.ReactNode;`
