import React from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react';

function EntryLine({
    id,
    isExpense = true,
    description,
    value,
    deleteEntry,
    editEntry,
}) {
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
                                onClick={() => editEntry(id)}
                            />
                            <Icon
                                name='trash'
                                bordered
                                onClick={() => deleteEntry(id)}
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
