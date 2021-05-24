import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'semantic-ui-react';
import useEntryDetails from '../hooks/useEntryDetails';
import { closeEditModal } from '../redux/actions/modals.actions';
import EntryForm from './EntryForm';

function ModalEdit({ isOpen, description, value, isExpense, id }) {
    const dispatch = useDispatch();
    const entry = useEntryDetails(description, value, isExpense);

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <Form unstackable>
                    <EntryForm
                        description={entry.description}
                        value={entry.value}
                        isExpense={entry.isExpense}
                        setValue={entry.setValue}
                        setDescription={entry.setDescription}
                        setIsExpense={entry.setIsExpense}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>
                    Close
                </Button>
                <Button onClick={() => entry.updateEntry(id)} primary>
                    Ok
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalEdit;
