import { combineReducers } from '@reduxjs/toolkit';

import {
  googleMapsScrapeRuns,
  leadActivities,
  leadCategories,
  leadContactActivities,
  leadContactChat,
  leadContacts,
  leads,
  llmModels,
  savedFilters,
  toCallLogs,
} from './dumps';

import {
  currentGoogleMapsScrapeRun,
  currentLead,
  currentLeadContact,
} from './current';

import {
  breadcrumbBuilder,
  dashboardBuilder,
  googleMapsScraperBuilder,
  leadBuilder,
  leadContactBuilder,
  leadContactsFiltersBuilder,
  leadsFiltersBuilder,
  toCallLogBuilder,
} from './builders';

import { leadsFilters, leadContactsFilters } from './filters';

/**
 * Lead Studio root reducer: commercial leads, contacts, dashboard, and related UI builders only.
 */
const rootReducer = combineReducers({
  leads,
  leadCategories,
  leadContacts,
  leadActivities,
  leadContactActivities,
  leadContactChat,
  savedFilters,
  llmModels,
  googleMapsScrapeRuns,
  toCallLogs,

  currentLead,
  currentLeadContact,
  currentGoogleMapsScrapeRun,

  leadBuilder,
  leadsFiltersBuilder,
  leadContactsFiltersBuilder,
  leadContactBuilder,
  googleMapsScraperBuilder,
  dashboardBuilder,
  breadcrumbBuilder,
  toCallLogBuilder,

  leadsFilters,
  leadContactsFilters,
});

export default rootReducer;
