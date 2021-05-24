import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {
    const {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
    } = useEntryDetails();

    return (
        <Form unstackable>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
            />

            <ButtonSaveOrCancel
                addEntry={addEntry}
                description={description}
                isExpense={isExpense}
                value={value}
            />
        </Form>
    );
}

export default NewEntryForm;
