Action menu from a button.

```jsx
<DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline">Options</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Duplicate</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
```

Parts: `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuGroup`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioGroup`, `DropdownMenuRadioItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuShortcut`.

Props: `open?: boolean; defaultOpen?: boolean; onOpenChange?: (v: boolean) => void; children?: React.ReactNode;`
