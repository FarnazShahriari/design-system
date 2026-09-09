import { GridOverlay } from "@/components/showcase/grid-overlay"

/**
 * The archetype pages render outside the docs shell. The only thing this
 * layout adds is the optional column overlay, switched on with ?grid=1.
 */
export default function PreviewLayout({ children }: LayoutProps<"/preview">) {
  return (
    <>
      {children}
      <GridOverlay />
    </>
  )
}
