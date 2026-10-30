Switch between views in the same place. TabsList variant="line" for an underline style.

```jsx
<Tabs defaultValue="a">
  <TabsList><TabsTrigger value="a">Overview</TabsTrigger><TabsTrigger value="b">Tokens</TabsTrigger></TabsList>
  <TabsContent value="a">…</TabsContent>
</Tabs>
```

Parts: `TabsList`, `TabsTrigger`, `TabsContent`.

Props: `value?: string; defaultValue?: string; onValueChange?: (v: string) => void; orientation?: "horizontal" | "vertical"; className?: string; children?: React.ReactNode;`
