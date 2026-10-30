Empty state: icon, title, one line of help, and an action.

```jsx
<Empty bordered>
  <EmptyHeader><EmptyMedia variant="icon"><Icon name="folder" /></EmptyMedia><EmptyTitle>No projects yet</EmptyTitle></EmptyHeader>
</Empty>
```

Parts: `EmptyHeader`, `EmptyMedia`, `EmptyTitle`, `EmptyDescription`, `EmptyContent`.

Props: `bordered?: boolean; className?: string; children?: React.ReactNode;`
