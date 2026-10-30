Platform <select> styled like Input — prefer on mobile or for long lists.

```jsx
<NativeSelect>
  <NativeSelectOption>Product design</NativeSelectOption>
  <NativeSelectOption>Branding</NativeSelectOption>
</NativeSelect>
```

Parts: `NativeSelectOption`, `NativeSelectOptGroup`.

Props: `size?: "default" | "sm"; value?: string; defaultValue?: string; disabled?: boolean; onChange?: (e: any) => void; className?: string; children?: React.ReactNode;`
