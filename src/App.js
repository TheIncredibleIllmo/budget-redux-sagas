import { Container, Statistic } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntriesAction } from './redux/actions/entries.actions';

function App() {
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expensesTotal, setExpensesTotal] = useState(0);
    const [balance, setBalance] = useState(0);
    const [entry, setEntry] = useState();

    const entries = useSelector((state) => state.entries);
    const { isOpen, id } = useSelector((state) => state.modals);

    const dispatch = useDispatch();

    useEffect(() => {
        const index = entries?.findIndex((x) => x.id === id);
        const editEntry = entries[index];
        if (!editEntry) return;
        setEntry(editEntry);
    }, [isOpen, id]);

    useEffect(() => {
        let totalIncome = 0;
        let totalExpenses = 0;

        entries.map((x) => {
            if (x.isExpense) {
                return (totalExpenses += Number(x.value));
            } else {
                return (totalIncome += Number(x.value));
            }
        });

        let total = totalIncome - totalExpenses;

        setIncomeTotal(totalIncome);
        setExpensesTotal(totalExpenses);
        setBalance(total);
    }, [entries]);

    useEffect(() => {
        dispatch(getAllEntriesAction());
    }, [dispatch]);

    return (
        <Container>
            <MainHeader title='Budget' type='h1' />

            <Statistic size='small'>
                <Statistic.Label>Your Balance:</Statistic.Label>
                <Statistic.Value>
                    {isNaN(balance) ? 0 : balance}
                </Statistic.Value>
            </Statistic>

            <DisplayBalances
                incomeTotal={incomeTotal}
                expensesTotal={expensesTotal}
            />

            <MainHeader title='History' type='h3' />

            <EntryLines entries={entries} />

            <MainHeader title='Add new transaction' type='h3' />

            <NewEntryForm />

            <ModalEdit isOpen={isOpen} {...entry} />
        </Container>
    );
}

export default App;
