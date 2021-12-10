import { createSelector } from '@reduxjs/toolkit';
import { JobId, LooseObject } from '../../helpers/types';
import { RootState } from '../root';

export const selectStoresItemsById = (state: RootState): LooseObject => state.jobs.itemsById;
export const selectStoresItemsIds = (state: RootState): JobId[] => state.jobs.itemsIds;


export const selectStoresTableIsLoading = (state: RootState): boolean => state.jobs.isLoading;

export const selectJobsItems = createSelector(
  selectStoresItemsById,
  selectStoresItemsIds,
  (itemsById, itemsIds) => itemsIds.map((id: JobId) => itemsById[id]),
);
export const selectSelectedJob = (state: RootState): JobId | null => state.jobs.selectedJob;

export const selectJobById = createSelector(
  selectStoresItemsById,
  selectSelectedJob,
  (itemsById, selectedJob) => selectedJob && itemsById[selectedJob],
);

