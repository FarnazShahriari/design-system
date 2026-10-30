A set of toggles, single or multi-select.

```jsx
<ToggleGroup type="multiple" variant="outline">
  <ToggleGroupItem value="bold"><Icon name="bold" /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Icon name="italic" /></ToggleGroupItem>
</ToggleGroup>
```

Parts: `ToggleGroupItem`.

Props: `type?: "single" | "multiple"; value?: string | string[]; defaultValue?: string | string[]; onValueChange?: (v: any) => void; variant?: "default" | "outline"; size?: "default" | "sm" | "lg"; spacing?: number; className?: string; children?: React.ReactNode;`
