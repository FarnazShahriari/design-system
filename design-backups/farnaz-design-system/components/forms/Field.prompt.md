Layout wrapper that pairs a control with label, description and error.

```jsx
<Field>
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <Input id="name" />
  <FieldDescription>As it should appear on the invoice.</FieldDescription>
</Field>
```

Parts: `FieldSet`, `FieldLegend`, `FieldGroup`, `FieldContent`, `FieldLabel`, `FieldTitle`, `FieldDescription`, `FieldError`, `FieldSeparator`.

Props: `orientation?: "vertical" | "horizontal"; invalid?: boolean; disabled?: boolean; className?: string; children?: React.ReactNode;`
