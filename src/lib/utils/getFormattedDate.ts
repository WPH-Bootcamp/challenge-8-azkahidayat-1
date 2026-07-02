// TODO: Add more utility functions as needed
// Examples: formatDate, formatRuntime, etc.

export function getFormattedDate(date: string): string {
  const objectDate = new Date(date);
  const formattedDate = objectDate.toLocaleDateString('us-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formattedDate;
}
