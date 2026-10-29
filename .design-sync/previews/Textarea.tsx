import { Label, Textarea } from "@farnazshahriari/design-system"

/** The brief field: label, generous control, one line of guidance. */
export const Default = () => (
  <div className="flex w-96 flex-col gap-2">
    <Label htmlFor="ta-brief" className="text-muted-foreground"><span className="text-label">Project brief</span></Label>
    <Textarea
      id="ta-brief"
      rows={4}
      placeholder="What are you trying to change, and for whom?"
    />
    <p className="text-meta text-muted-foreground">
      A paragraph is plenty. Links are welcome.
    </p>
  </div>
)

/** Filled with a real brief — the control grows with its content. */
export const Filled = () => (
  <div className="flex w-96 flex-col gap-2">
    <Label htmlFor="ta-brief-f" className="text-muted-foreground"><span className="text-label">Project brief</span></Label>
    <Textarea
      id="ta-brief-f"
      rows={5}
      defaultValue={
        "We run regional rail ticketing across four operators. Booking takes eleven screens and roughly a third of people abandon at seat selection.\n\nWe would like help mapping the end-to-end journey and rebuilding the booking flow."
      }
    />
    <p className="text-meta text-muted-foreground">218 characters</p>
  </div>
)

/** Invalid: destructive border, destructive message, nothing else changes. */
export const Invalid = () => (
  <div className="flex w-96 flex-col gap-2">
    <Label htmlFor="ta-brief-e" className="text-muted-foreground"><span className="text-label">Project brief</span></Label>
    <Textarea
      id="ta-brief-e"
      rows={4}
      aria-invalid
      defaultValue="Need a redesign."
    />
    <p className="text-meta text-destructive">
      Tell us a little more — at least a sentence about the outcome you want.
    </p>
  </div>
)

/** Disabled, with the reason stated rather than implied. */
export const Disabled = () => (
  <div className="flex w-96 flex-col gap-2">
    <Label htmlFor="ta-notes" className="text-muted-foreground"><span className="text-label">Internal notes</span></Label>
    <Textarea
      id="ta-notes"
      rows={3}
      disabled
      defaultValue="Scoping call booked for 12 November. Discovery two weeks."
    />
    <p className="text-meta text-muted-foreground">
      Visible to the studio only.
    </p>
  </div>
)
