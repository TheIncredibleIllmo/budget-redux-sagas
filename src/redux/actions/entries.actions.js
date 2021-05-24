const types = {
    GET_ENTRIES: 'GET_ENTRIES',
    GET_ENTRIES_SUCCESS: 'GET_ENTRIES_SUCCESS',
    GET_ENTRY_DETAILS_SUCCESS: 'GET_ENTRY_DETAILS_SUCCESS',
    ADD_ENTRY: 'ADD_ENTRY',
    ADD_ENTRY_RESULT: 'ADD_ENTRY_RESULT',
    REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
};

export default types;

export const addEntryAction = (payload) => {
    return { type: types.ADD_ENTRY, payload };
};

export const removeEntryAction = (id) => {
    return { type: types.REMOVE_ENTRY, payload: { id } };
};

export const updateEntryAction = (id, entry) => {
    return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

export const getAllEntriesAction = () => {
    return { type: types.GET_ENTRIES };
};

export const getEntriesSuccessAction = (entries) => {
    return { type: types.GET_ENTRIES_SUCCESS, payload: entries };
};

export const getEntryDetailsSuccessAction = (id, entryDetails) => {
    return {
        type: types.GET_ENTRY_DETAILS_SUCCESS,
        payload: { id, entry: entryDetails },
    };
};

export const removeEntryResult = (id) => {
    return { type: types.REMOVE_ENTRY_RESULT, payload: { id } };
};

export const addEntryResultAction = (payload) => {
    return { type: types.ADD_ENTRY_RESULT, payload };
};
