export default function UpdatePerformance({
  performance,
}: {
  performance: Performance;
}) {
  return <div>Update {performance.date_time.toLocaleString()}</div>;
}
