import { call, put, take } from '@redux-saga/core/effects';
import axios from 'axios';
import entryTypes, { removeEntryResult } from '../actions/entries.actions';

export function* deleteEntrySaga() {
    while (true) {
        const { payload } = yield take(entryTypes.REMOVE_ENTRY);
        const id = payload.id;
        yield call(deleteEntry, id);
        yield put(removeEntryResult(id));
    }
}

async function deleteEntry(id) {
    await axios.delete(`http://localhost:3001/entries/${id}`);
    await axios.delete(`http://localhost:3001/values/${id}`);
}
