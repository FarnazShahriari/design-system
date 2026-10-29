import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@farnazshahriari/design-system"

/**
 * The avatar is small by design, so it is previewed the way it ships: at a
 * readable size, beside a name and a role. Initials are the fallback and the
 * default here — the capture environment serves no portraits.
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

/**
 * AvatarGroup overlaps the set and AvatarGroupCount closes it. At `lg` the
 * overlap still clears the initials — smaller sizes clip them.
 */
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
        <Avatar size="lg">
          <AvatarFallback>LH</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
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

/**
 * AvatarBadge rides the bottom-right corner and keeps a ring in the page
 * ground, so the dot stays readable against the avatar beneath it.
 */
export const WithBadge = () => (
  <div className="flex flex-col gap-4">
    {[
      { initials: "RM", name: "Rosa Mendel", status: "Available today" },
      { initials: "TO", name: "Tomas Okonjo", status: "In the field until 12 March" },
      { initials: "LH", name: "Lena Hartmann", status: "Available from Thursday" },
    ].map((p) => (
      <div key={p.initials} className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback>{p.initials}</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <div className="flex flex-col">
          <span className="text-body font-medium">{p.name}</span>
          <span className="text-meta text-muted-foreground">{p.status}</span>
        </div>
      </div>
    ))}
  </div>
)
