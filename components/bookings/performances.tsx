import { formatDateTime } from '@/lib/utils';
import ConfirmDeleteModal from '@/components/confirm-delete-modal';

export default function Performances({
  performances,
}: {
  performances: { id: string; date_time: Date }[];
}) {
  return (
    <ul>
      {performances.map((perf: { id: string; date_time: Date }) => (
        <li className="flex items-center gap-4" key={perf.id}>
          <p>{formatDateTime(perf.date_time.toLocaleString())}</p>
          <ConfirmDeleteModal resourceType="performance" resourceId={perf.id} />
        </li>
      ))}
    </ul>
  );
}
