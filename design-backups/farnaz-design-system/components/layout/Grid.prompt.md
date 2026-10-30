12-column grid with 16px gutter; children span themselves.

```jsx
<Grid><div style={{ gridColumn: "span 7" }}>…</div><div style={{ gridColumn: "span 5" }}>…</div></Grid>
```

Props: `className?: string; style?: React.CSSProperties; children?: React.ReactNode;`
