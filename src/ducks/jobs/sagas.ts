import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects';

import { jobsSlice } from '../jobs';
import { getJobsList } from './services';

function* getStoresListSaga() {
  try {
    const { data } = yield call(getJobsList);
    yield put(
      jobsSlice.actions.getJobsListSuccess(data),
    );
  } catch (error) {
    yield put(jobsSlice.actions.getJobsListFailed(error));
  }
}

export function* watchJobs(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(jobsSlice.actions.getJobsList, getStoresListSaga);
}
