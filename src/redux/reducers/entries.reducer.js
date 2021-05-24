import entriesTypes from '../actions/entries.actions';

var initialEntries = [];

const entriesReducer = (state = initialEntries, action) => {
    switch (action.type) {
        case entriesTypes.ADD_ENTRY_RESULT:
            const newEntries = state.concat({ ...action.payload });
            return newEntries;
        case entriesTypes.REMOVE_ENTRY_RESULT:
            return state.filter((x) => x.id !== action.payload.id);
        case entriesTypes.GET_ENTRY_DETAILS_SUCCESS:
        case entriesTypes.UPDATE_ENTRY:
            const updatedEntries = [...state];
            const index = updatedEntries.findIndex(
                (x) => x.id === action.payload.id
            );
            updatedEntries[index] = {
                ...updatedEntries[index],
                ...action.payload.entry,
                id: action.payload.id,
            };
            return updatedEntries;
        case entriesTypes.GET_ENTRIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default entriesReducer;
