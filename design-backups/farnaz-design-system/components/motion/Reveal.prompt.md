Scroll reveal — fires once. The only scroll-motion primitive.

```jsx
<Reveal><h1 className="text-display">Northwind</h1></Reveal>
<Reveal variant="fade" delay={0.1}>…</Reveal>
```

Parts: `RevealGroup`.

Props: `variant?: "fade" | "rise" | "rise-fade"; delay?: number; className?: string; children?: React.ReactNode;`
