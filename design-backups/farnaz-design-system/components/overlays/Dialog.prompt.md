Modal for a focused task.

```jsx
<Dialog><DialogTrigger asChild><Button variant="outline">Edit</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Edit profile</DialogTitle></DialogHeader></DialogContent></Dialog>
```

Parts: `DialogTrigger`, `DialogClose`, `DialogOverlay`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`.

Props: `open?: boolean; defaultOpen?: boolean; onOpenChange?: (v: boolean) => void; children?: React.ReactNode;`
