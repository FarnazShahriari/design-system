Transient notifications (sonner-style). Mount once, then call Toaster.toast("Saved") or window.dsToast.success(...).

```jsx
<Toaster />
<Button onClick={() => Toaster.toast.success("Copied", { description: "Tokens copied to clipboard" })}>Copy</Button>
```

Props: `duration?: number;`
