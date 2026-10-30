Confirmation for destructive or irreversible actions.

```jsx
<AlertDialog><AlertDialogTrigger asChild><Button variant="destructive">Delete</Button></AlertDialogTrigger><AlertDialogContent>…<AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Delete</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
```

Parts: `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, `AlertDialogCancel`.

Props: `open?: boolean; defaultOpen?: boolean; onOpenChange?: (v: boolean) => void; children?: React.ReactNode;`
