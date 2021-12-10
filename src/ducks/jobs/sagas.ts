import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects';

import { actions } from '../jobs';
import { getJobsList } from './services';

function* getStoresListSaga() {
  try {
    const { data } = yield call(getJobsList);
    yield put(
      actions.getJobsListSuccess(data),
    );
  } catch (error) {
    yield put(actions.getJobsListFailed(error));
  }
}

export function* watchJobs(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(actions.getJobsList, getStoresListSaga);
}
