Bordered container for a grouped unit of content. No shadow, 2.8px radius. Put a real heading inside CardHeader rather than restyling CardTitle.

```jsx
<Card>
  <CardHeader><h3 className="text-h4">Product design</h3><CardDescription>Research through release.</CardDescription></CardHeader>
  <CardContent>…</CardContent>
</Card>
```

Parts: `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`.

Props: `className?: string; children?: React.ReactNode;`
