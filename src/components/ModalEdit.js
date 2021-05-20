import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function ModalEdit({
    isOpen,
    setIsOpen,
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
}) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <Form unstackable>
                    <EntryForm
                        description={description}
                        value={value}
                        isExpense={isExpense}
                        setValue={setValue}
                        setDescription={setDescription}
                        setIsExpense={setIsExpense}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>
                    Ok
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalEdit;
