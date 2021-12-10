import { all, AllEffect, call, CallEffect } from 'redux-saga/effects';

import { watchJobs } from '../jobs/sagas';

export function* rootSaga(): Generator<AllEffect<CallEffect<void>>, void, unknown>{
  yield all([
    call(watchJobs),
  ]);
}
