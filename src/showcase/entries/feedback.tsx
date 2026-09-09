import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

import { ToastDemo } from "@/components/showcase/toast-demo"
import { Alert, AlertDescription, AlertTitle } from "@farnazshahriari/design-system/ui/alert"
import type { Entry } from "@/showcase/types"

export const feedback: Entry[] = [
  {
    slug: "alert",
    title: "Alert",
    description:
      "An inline, persistent message tied to the surrounding content — not an interruption.",
    origin: "restyled",
    examples: [
      {
        label: "Variants",
        node: (
          <div className="max-w-xl space-y-4">
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle>Changes saved</AlertTitle>
              <AlertDescription>
                Your token edits have been written to globals.css.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Contrast check failed</AlertTitle>
              <AlertDescription>
                muted-foreground on muted falls below 4.5:1 at this size.
              </AlertDescription>
            </Alert>
          </div>
        ),
      },
    ],
  },
  {
    slug: "toast",
    title: "Toast",
    description:
      "Transient confirmation, three words or fewer, stating the fact rather than the emotion. No icons, no close button — it leaves on its own.",
    origin: "restyled",
    examples: [
      {
        label: "Trigger",
        note: 'The canonical example in this system is "Link copied" — that is the register to aim for.',
        node: <ToastDemo />,
      },
    ],
  },
]
