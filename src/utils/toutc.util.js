export default function parseYmdToUtcDate(ymd) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(ymd)) {
    throw new Error(`Invalid date format (expected YYYY-MM-DD): ${ymd}`);
  }
  const d = new Date(`${ymd}T00:00:00.000Z`);
  if (Number.isNaN(d.getTime())) throw new Error(`Invalid date: ${ymd}`);
  return d;
}
