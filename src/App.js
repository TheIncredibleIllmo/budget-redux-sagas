import { Container, Statistic } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
    return (
        <Container>
            <MainHeader title='Budget' type='h1' />

            <Statistic size='small'>
                <Statistic.Label>Your Balance:</Statistic.Label>
                <Statistic.Value>2,550.53</Statistic.Value>
            </Statistic>

            <DisplayBalances />

            <MainHeader title='History' type='h3' />

            <EntryLine
                color='green'
                description='Something else'
                value='200'
                isExpense={false}
            />
            <EntryLine color='red' description='Something else' value='90' />

            <MainHeader title='Add new transaction' type='h3' />

            <NewEntryForm />
        </Container>
    );
}

export default App;
