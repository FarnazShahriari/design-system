import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@farnazshahriari/design-system"

/** The default alert: a card surface, a title, and one factual sentence. */
export const Default = () => (
  <Alert className="max-w-xl">
    <AlertTitle>Case study updated</AlertTitle>
    <AlertDescription>
      Northwind now includes the post-launch measurement. The earlier version
      stays available from the project archive.
    </AlertDescription>
  </Alert>
)

/** Destructive keeps the same paper surface and shifts only the text colour. */
export const Destructive = () => (
  <Alert variant="destructive" className="max-w-xl">
    <AlertTitle>This project is under embargo</AlertTitle>
    <AlertDescription>
      Atlas cannot be shared outside the review group until 14 January. Request
      access rather than forwarding the link.
    </AlertDescription>
  </Alert>
)

/** Both variants together, the way a page stacks them. */
export const Stacked = () => (
  <div className="flex flex-col gap-4 max-w-xl">
    <Alert>
      <AlertTitle>Draft, not published</AlertTitle>
      <AlertDescription>
        Meridian is visible to you because you are signed in. Publish it to put
        it on the work index.
      </AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <AlertTitle>Two images are missing alternative text</AlertTitle>
      <AlertDescription>
        The depot map and the service blueprint. Both are decorative in the
        layout but carry the argument of the section.
      </AlertDescription>
    </Alert>
  </div>
)
