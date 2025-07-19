import axios from "axios";
import {
  fetchUsers,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "./users-slice";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchUsersSaga() {
  try {
    const { data } = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/users")
    );
    yield put(fetchUsersSuccess(data));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    yield put(fetchUsersFailure());
  }
}

export function* rootSaga() {
  yield takeLatest(fetchUsers.type, fetchUsersSaga);
}
