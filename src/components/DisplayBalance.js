import React from 'react';
import { Statistic } from 'semantic-ui-react';

function DisplayBalance({ size = 'small', color = 'black', value, title }) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: 'left' }}>
                {title}
            </Statistic.Label>
            <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
        </Statistic>
    );
}

export default DisplayBalance;
