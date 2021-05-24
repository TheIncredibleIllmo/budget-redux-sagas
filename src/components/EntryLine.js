import React from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { removeEntryAction } from '../redux/actions/entries.actions';
import { openEditModal } from '../redux/actions/modals.actions';

function EntryLine({ id, isExpense = true, description, value }) {
    const dispatch = useDispatch();
    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column with={10} textAlign='left'>
                            {description}
                        </Grid.Column>
                        <Grid.Column with={3} textAlign='right'>
                            ${value}
                        </Grid.Column>
                        <Grid.Column with={3}>
                            <Icon
                                name='edit'
                                bordered
                                style={{ cursor: 'pointer' }}
                                onClick={() => dispatch(openEditModal(id))}
                            />
                            <Icon
                                name='trash'
                                bordered
                                onClick={() => dispatch(removeEntryAction(id))}
                                style={{ cursor: 'pointer' }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    );
}

export default EntryLine;
