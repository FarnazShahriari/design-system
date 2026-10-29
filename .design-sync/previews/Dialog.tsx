import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@farnazshahriari/design-system"

/**
 * `defaultOpen` is what makes an overlay gradeable in a static shot. The
 * content is portalled and fixed, so it centres on the viewport rather than
 * sitting inside its cell; the dimmed ground behind it is the overlay. The
 * open exports carry no trigger — a trigger renders above the overlay here
 * instead of under it, which reads as a bug rather than as the page behind.
 */
export const Open = () => (
  <Dialog defaultOpen>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Request access to Atlas</DialogTitle>
        <DialogDescription>
          Atlas is under embargo until 14 January. Access is granted to named
          reviewers, and the link cannot be forwarded.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter showCloseButton>
        <Button>Send request</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

/** A confirmation: one destructive action, one way out, no shadow anywhere. */
export const Confirm = () => (
  <Dialog defaultOpen>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Archive Meridian?</DialogTitle>
        <DialogDescription>
          It comes off the work index immediately. The case study stays
          reachable by direct link, and you can restore it at any time.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter showCloseButton>
        <Button variant="destructive">Archive</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

/** The closed state — DialogTrigger is the dialog's whole footprint on the page. */
export const Closed = () => (
  <div className="flex items-center gap-4">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Request access</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request access to Atlas</DialogTitle>
          <DialogDescription>
            Atlas is under embargo until 14 January.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button>Send request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <span className="text-body text-muted-foreground">
      Nothing is mounted until the trigger is pressed.
    </span>
  </div>
)
