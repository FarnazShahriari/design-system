Custom listbox select for short option sets.

```jsx
<Select defaultValue="product">
  <SelectTrigger><SelectValue placeholder="Service" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="product">Product design</SelectItem>
    <SelectItem value="brand">Branding</SelectItem>
  </SelectContent>
</Select>
```

Parts: `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectGroup`, `SelectLabel`, `SelectItem`, `SelectSeparator`.

Props: `value?: string; defaultValue?: string; onValueChange?: (v: string) => void; disabled?: boolean; children?: React.ReactNode;`
