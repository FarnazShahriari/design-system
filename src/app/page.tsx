import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const colorSwatches = [
  { name: "background", token: "bg-background border" },
  { name: "foreground", token: "bg-foreground" },
  { name: "primary", token: "bg-primary" },
  { name: "secondary", token: "bg-secondary border" },
  { name: "muted", token: "bg-muted border" },
  { name: "accent", token: "bg-accent" },
  { name: "destructive", token: "bg-destructive" },
  { name: "border", token: "bg-border" },
]

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-h3">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export default function StyleGuide() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:px-10 sm:py-24">
      <header className="space-y-4">
        <p className="text-meta uppercase text-muted-foreground">
          Design System
        </p>
        <h1 className="text-display">Tokens, then components.</h1>
        <p className="max-w-[60ch] text-lead text-muted-foreground">
          A shadcn/ui foundation, retokenized with a restrained,
          near-monochrome palette and a tight, fluid type scale. One file
          controls all of it — see{" "}
          <code className="rounded-sm bg-muted px-1.5 py-0.5 text-meta">
            src/app/globals.css
          </code>
          .
        </p>
      </header>

      <Section
        title="Color tokens"
        description="Every component below is styled with these names, never a raw hex value. Change a value here and it propagates everywhere."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {colorSwatches.map((c) => (
            <div key={c.name} className="space-y-2">
              <div className={`h-16 rounded-md ${c.token}`} />
              <p className="text-meta text-muted-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Type scale"
        description="Fluid (clamp-based) headings with tight negative tracking at large sizes, loosening toward zero at small sizes."
      >
        <div className="space-y-3">
          <p className="text-display">Display</p>
          <p className="text-h1">Heading 1</p>
          <p className="text-h2">Heading 2</p>
          <p className="text-h3">Heading 3</p>
          <p className="text-h4">Heading 4</p>
          <p className="text-lead text-muted-foreground">
            Lead paragraph — a slightly larger, slightly lighter opening
            line for a section.
          </p>
          <p className="text-base text-muted-foreground">
            Default body copy uses Tailwind&rsquo;s standard text-base /
            text-sm scale — only headings and the lead style are custom.
          </p>
          <p className="text-meta text-muted-foreground">
            Meta / label text — small, quiet, functional.
          </p>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button className="rounded-pill">Pill (the &ldquo;real&rdquo; button)</Button>
        </div>
      </Section>

      <Section
        title="Badges"
        description="Always pill-shaped, per the source material's radius rule."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      <Section title="Cards">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>A short supporting sentence.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card content area. Square corners, no shadow, a hairline
                border only.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
          <Card className="border-accent/40 bg-accent text-accent-foreground">
            <CardHeader>
              <CardTitle>Accent card</CardTitle>
              <CardDescription className="text-accent-foreground/80">
                The one accent color, used deliberately.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-accent-foreground/80">
                Swap <code>--accent</code> in globals.css to re-brand every
                accent surface at once.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Form elements">
        <div className="grid max-w-md gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Ada Lovelace" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Say something…" />
          </div>
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="overview" className="max-w-md">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-sm text-muted-foreground">
            Overview content goes here.
          </TabsContent>
          <TabsContent value="details" className="text-sm text-muted-foreground">
            Detail content goes here.
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Overlays">
        <div className="flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This is a dialog styled entirely from the shared tokens.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>A tooltip, themed the same way.</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
      </Section>

      <Separator />

      <footer className="text-meta text-muted-foreground">
        Built on{" "}
        <a
          className="underline underline-offset-4"
          href="https://ui.shadcn.com"
        >
          shadcn/ui
        </a>
        . See <code>README.md</code> for how to add more components and
        extend the token set.
      </footer>
    </main>
  )
}
