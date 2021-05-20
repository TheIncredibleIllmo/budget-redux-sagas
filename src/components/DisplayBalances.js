import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({ incomeTotal, expensesTotal }) {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance
                            color='green'
                            value={incomeTotal}
                            title='Income'
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance
                            color='red'
                            value={expensesTotal}
                            title='Expenses'
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;
