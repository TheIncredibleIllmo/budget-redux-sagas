import { call, fork, put, take } from 'redux-saga/effects';
import entryTypes, {
    getEntryDetailsSuccessAction,
    getEntriesSuccessAction,
} from '../actions/entries.actions';
import axios from 'axios';

export function* getAllEntries() {
    yield take(entryTypes.GET_ENTRIES);
    const { data } = yield call(axios, 'http://localhost:3001/entries');
    yield put(getEntriesSuccessAction(data));
}

export function* getEntryDetails(entry) {
    if (!entry?.id) return;

    const { data } = yield call(
        axios,
        `http://localhost:3001/values/${entry.id}`
    );

    yield put(getEntryDetailsSuccessAction(entry.id, data));
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entryTypes.GET_ENTRIES_SUCCESS);
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry);
    }
}
