import { all, call } from 'redux-saga/effects';

import { watchJobs } from '../jobs/sagas';

export function* rootSaga() {
  yield all([
    call(watchJobs),
  ]);
}
