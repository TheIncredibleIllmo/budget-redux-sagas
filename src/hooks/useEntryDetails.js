import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    addEntryAction,
    updateEntryAction,
} from '../redux/actions/entries.actions';
import { closeEditModal } from '../redux/actions/modals.actions';

function useEntryDetails(desc = '', val = '', isExp = true) {
    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);

    const dispatch = useDispatch();

    useEffect(() => {
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp]);

    const updateEntry = (id) => {
        dispatch(
            updateEntryAction(id, {
                description,
                value,
                isExpense,
            })
        );
        dispatch(closeEditModal());
    };

    const addEntry = () => {
        const newEntry = {
            id: uuidv4(),
            description,
            value,
            isExpense,
        };

        dispatch(addEntryAction(newEntry));

        resetValues();
    };

    function resetValues() {
        setDescription('');
        setValue('');
        setIsExpense(true);
    }

    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
        updateEntry,
    };
}

export default useEntryDetails;
