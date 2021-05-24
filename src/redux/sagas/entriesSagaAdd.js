import { takeLatest, call, put } from '@redux-saga/core/effects';
import axios from 'axios';
import entryTypes, { addEntryResultAction } from '../actions/entries.actions';

export function* addEntrySaga() {
    yield takeLatest(entryTypes.ADD_ENTRY, addEntryToDb);
}

function* addEntryToDb({ payload }) {
    //here the action is passed as an argument,
    // this is way we use destructuring to get the payload
    yield call(addEntry, payload);
    yield call(addEntryDetails, payload);
    yield put(addEntryResultAction(payload));
}

async function addEntry({ id, description }) {
    await axios.post('http://localhost:3001/entries', { id, description });
}

async function addEntryDetails({ id, value, isExpense }) {
    await axios.post('http://localhost:3001/values', { id, value, isExpense });
}
