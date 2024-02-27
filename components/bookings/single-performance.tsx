// 'use client';

// import { useState } from 'react';
// import { Performance } from '@/lib/definitions';
// import {
//   UpdatePerformance,
//   DeletePerformance,
// } from '@/components/bookings/buttons';
// import { formatDateTime } from '@/lib/utils';
// import EditPerformance from '@/components/bookings/edit-performances';

// export default function SinglePerformance({
//   performance,
// }: {
//   performance: { id: string; date_time: Date };
// }) {
//   const [showUpdate, setShowUpdate] = useState(false);

//   return (
//     <>
//       {!showUpdate ? (
//         <li>
//           <p>{formatDateTime(performance.date_time.toLocaleString())}</p>
//         </li>
//       ) : (
//         <EditPerformance
//           performance={performance}
//           setShowUpdate={setShowUpdate}
//         />
//       )}
//     </>
//   );
// }
