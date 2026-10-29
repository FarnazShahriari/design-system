import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@farnazshahriari/design-system"

/** A real table: labelled header, tabular figures, a caption that explains it. */
export const Default = () => (
  <Table>
    <TableCaption>Engagements, most recent first.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Project</TableHead>
        <TableHead>Discipline</TableHead>
        <TableHead>Year</TableHead>
        <TableHead className="text-right">Screens</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">Northwind</TableCell>
        <TableCell>Service design</TableCell>
        <TableCell>2026</TableCell>
        <TableCell className="text-right tabular-nums">11</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Meridian</TableCell>
        <TableCell>Logistics</TableCell>
        <TableCell>2025</TableCell>
        <TableCell className="text-right tabular-nums">34</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Atlas</TableCell>
        <TableCell>Public sector</TableCell>
        <TableCell>2025</TableCell>
        <TableCell className="text-right tabular-nums">7</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
