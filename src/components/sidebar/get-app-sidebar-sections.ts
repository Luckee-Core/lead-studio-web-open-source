import {
  DASHBOARD_PATH,
  TO_CALL_LOG_PATH,
} from '@/config/routes';
import type { SidebarSection } from './types';

/**
 * Lead Studio nav sections (dashboard + commercial leads workflow).
 */
export const getAppSidebarSections = (): SidebarSection[] => [
  {
    title: 'Lead Studio',
    links: [
      { name: 'Dashboard', href: DASHBOARD_PATH },
      { name: 'Commercial leads', href: '/leads' },
      { name: 'Call List', href: TO_CALL_LOG_PATH },
      { name: 'Lead contacts', href: '/lead-contacts' },
    ],
  },
];
