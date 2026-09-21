/**
 * Frontend route paths. Use these instead of hardcoded strings for navigation.
 */
export { DASHBOARD_PATH } from './landing-links';

export const FIND_LEADS_PATH = '/leads/find';

export const LEAD_DETAIL_PATH = '/lead-detail-page';

/** Commercial leads → Call List */
export const TO_CALL_LOG_PATH = '/leads/to-call-log';

/** Static contact detail — identity in Redux `currentLeadContact` (ADR 008) */
export const LEAD_CONTACT_DETAIL_PATH = '/lead-contact-detail-page';
