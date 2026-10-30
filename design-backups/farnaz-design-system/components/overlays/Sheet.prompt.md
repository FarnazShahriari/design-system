Edge-anchored panel — mobile navigation, filters. SheetContent side="left|right|top|bottom".

```jsx
<Sheet><SheetTrigger asChild><Button size="icon" variant="ghost"><Icon name="menu" /></Button></SheetTrigger><SheetContent side="left">…</SheetContent></Sheet>
```

Parts: `SheetTrigger`, `SheetClose`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`.

Props: `open?: boolean; defaultOpen?: boolean; onOpenChange?: (v: boolean) => void; children?: React.ReactNode;`
