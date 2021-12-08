import { createSelector } from '@reduxjs/toolkit';

import { AppState } from "../root/rootReducer";

export const selectStoresItemsById = (state: any) => state.jobs.itemsById;
export const selectStoresItemsIds = (state: any) => state.jobs.itemsIds;


export const selectStoresTableIsLoading = (state: any) => state.jobs.isLoading();

export const selectJobsItems = createSelector(
  selectStoresItemsById,
  selectStoresItemsIds,
  (itemsById, itemsIds) => itemsIds.map((id:number) => itemsById[id]),
);

export const selectJobById = (state:any, id:number) => id && state.jobs.itemsById[id];