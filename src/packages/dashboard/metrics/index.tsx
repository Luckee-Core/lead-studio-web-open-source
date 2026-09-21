'use client';

import { TotalLeads } from './total-leads';
import { QueuedCalls } from './queued-calls';

/**
 * Engagement KPI tiles for the dashboard.
 */
export const DashboardMetrics = () => {
  return (
    <div className={styles.grid}>
      <TotalLeads />
      <QueuedCalls />
    </div>
  );
};

const styles = {
  grid: `
    grid gap-3 grid-cols-2
  `,
} as const;
