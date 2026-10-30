A page is a stack of Sections. theme re-declares colour tokens for the subtree so every child inverts on its own; rhythm sets vertical padding.

```jsx
<Section theme="dark" rhythm="lg">
  <Container><h2 className="text-h2">A dark band</h2><Button pill>This inverts on its own</Button></Container>
</Section>
```

Props: `theme?: "light" | "muted" | "dark" | "accent" | "inherit"; rhythm?: "none" | "sm" | "default" | "lg"; className?: string; children?: React.ReactNode;`
