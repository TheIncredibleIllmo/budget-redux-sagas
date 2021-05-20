import React from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react';

function EntryLine({ isExpense = true, description, value }) {
    return (
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
                        <Icon name='edit' bordered />
                        <Icon name='trash' bordered />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default EntryLine;
