import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances() {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance
                            color='green'
                            value='1,045.50'
                            title='Income'
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance
                            color='red'
                            value='645.40'
                            title='Expenses'
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;
