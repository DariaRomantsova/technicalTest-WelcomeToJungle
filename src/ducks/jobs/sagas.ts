import { call, put, takeLatest } from 'redux-saga/effects';

import { jobsSlice } from '../jobs';
import { getJobsList } from './services';
//import { normalize } from 'ducks/mapper';

function* getStoresListSaga():any {
  try {
    const {data} = yield call(getJobsList);
    yield put(
      jobsSlice.actions.getJobsListSuccess(data),
    );
  } catch (error) {
    yield put(jobsSlice.actions.getJobsListFailed(error));
  }
}


export function* watchJobs() {
  yield takeLatest(jobsSlice.actions.getJobsList, getStoresListSaga);
}
