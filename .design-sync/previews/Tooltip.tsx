import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@farnazshahriari/design-system"

/**
 * Tooltip content only exists while the trigger is hovered, so the static
 * shot opens it with `defaultOpen`. TooltipProvider is required and is NOT
 * supplied by the preview harness (there is no cfg.provider), so every
 * export carries its own.
 */
export const Default = () => (
  <TooltipProvider>
    <div className="flex items-center gap-3 pt-8">
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Eleven screens</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          Down from six hundred, measured at launch.
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
)

/**
 * The same tooltip on three sides. The content is an inverted block — solid
 * foreground, paper text, a square arrow — and separates itself without a
 * shadow.
 */
export const Sides = () => (
  <TooltipProvider>
    <div className="flex items-center justify-between gap-6 py-16">
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Opened above the trigger</TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Opened beside the trigger</TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Opened below the trigger</TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
)
