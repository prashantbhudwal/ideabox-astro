import { format, parseISO } from "date-fns";

export function formatDate(date: string) {
  const parsed = parseISO(date);
  return format(parsed, 'MMMM d, yyyy');
}
