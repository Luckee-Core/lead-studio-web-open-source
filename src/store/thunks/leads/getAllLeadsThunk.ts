import { coerceErrorFields, reportThunkError } from '@/api/thunk-errors';
import type { AppThunk } from '../../store';
import { getAllLeads } from '@/api/leads';
import { LeadsActions } from '../../dumps/leads';
import { mapApiFailureToThunkStatus } from '@/api/_shared';

type ResponseType = Promise<200 | 400 | 500>;

export const getAllLeadsThunk = (): AppThunk<ResponseType> => {
  return async (dispatch): ResponseType => {
    try {
      const response = await getAllLeads();

      if (response.success) {
        const leads = Array.isArray(response.data) ? response.data : [];
        dispatch(LeadsActions.setLeads(leads));
        return 200;
      }

      console.error('❌ getAllLeadsThunk failed:', response.error, response.httpStatus);
      return mapApiFailureToThunkStatus(response);
    } catch (error: unknown) {
      const { message, stack } = coerceErrorFields(error);
      reportThunkError({
        event: 'failedToGetAllLeads',
        message,
        stack,
        thunkName: 'getAllLeadsThunk',
      });
      console.error('❌ getAllLeadsThunk error:', error);
      return 500;
    }
  };
};
