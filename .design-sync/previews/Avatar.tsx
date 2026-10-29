import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@farnazshahriari/design-system"

/**
 * The avatar is small by design, so it is previewed the way it ships: at
 * readable size, beside a name and a role. AvatarImage is part of the
 * composition; the capture environment serves no portraits, and Radix renders
 * the image only once it has loaded, so the initials fallback is what shows.
 */
export const Team = () => (
  <div className="flex flex-col gap-4">
    {[
      { initials: "FS", name: "Farnaz Shahriari", role: "Design lead" },
      { initials: "RM", name: "Rosa Mendel", role: "Service designer" },
      { initials: "TO", name: "Tomas Okonjo", role: "Researcher" },
      { initials: "LH", name: "Lena Hartmann", role: "Content design" },
    ].map((p) => (
      <div key={p.initials} className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarImage src="portraits/none.jpg" alt="" />
          <AvatarFallback>{p.initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-body font-medium">{p.name}</span>
          <span className="text-meta text-muted-foreground">{p.role}</span>
        </div>
      </div>
    ))}
  </div>
)

/** AvatarGroup overlaps the set and AvatarGroupCount closes it. */
export const Group = () => (
  <div className="flex flex-col gap-6">
    <div className="flex items-center gap-4">
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarFallback>FS</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>TO</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+4</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-body text-muted-foreground">
        Seven people shipped Northwind
      </span>
    </div>
    <div className="flex items-center gap-4">
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>LH</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+2</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-body text-muted-foreground">
        Four on the Meridian handover
      </span>
    </div>
  </div>
)

/** The size ladder: sm, default, lg. */
export const Sizes = () => (
  <div className="flex items-end gap-6">
    {(["sm", "default", "lg"] as const).map((size) => (
      <div key={size} className="flex flex-col items-center gap-2">
        <Avatar size={size}>
          <AvatarFallback>FS</AvatarFallback>
        </Avatar>
        <span className="text-meta text-muted-foreground">{size}</span>
      </div>
    ))}
  </div>
)

/** AvatarBadge rides the bottom-right corner and keeps its ring on any ground. */
export const WithBadge = () => (
  <div className="flex items-center gap-6">
    {(["sm", "default", "lg"] as const).map((size) => (
      <Avatar key={size} size={size}>
        <AvatarFallback>RM</AvatarFallback>
        <AvatarBadge />
      </Avatar>
    ))}
    <span className="text-body text-muted-foreground">Available today</span>
  </div>
)
