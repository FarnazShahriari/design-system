A list row: media, title/description, actions.

```jsx
<Item variant="outline">
  <ItemContent><ItemTitle>Northwind</ItemTitle><ItemDescription>Retail banking</ItemDescription></ItemContent>
  <ItemActions><Button size="sm" variant="outline">Open</Button></ItemActions>
</Item>
```

Parts: `ItemGroup`, `ItemSeparator`, `ItemMedia`, `ItemContent`, `ItemTitle`, `ItemDescription`, `ItemActions`, `ItemHeader`, `ItemFooter`.

Props: `variant?: "default" | "outline" | "muted"; size?: "default" | "sm"; href?: string; className?: string; children?: React.ReactNode;`
