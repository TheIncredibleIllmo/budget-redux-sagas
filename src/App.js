import { Container, Statistic } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
    const [entries, setEntries] = useState(initialEntries);
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [entryId, setEntryId] = useState();
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expensesTotal, setExpensesTotal] = useState(0);
    const [balance, setBalance] = useState(0);

    const resetEntry = () => {
        setDescription('');
        setValue(0);
        setIsExpense(true);
    };

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entries.findIndex((x) => x.id === entryId);
            const newEntries = [...entries];
            newEntries[index].description = description;
            newEntries[index].value = value;
            newEntries[index].isExpense = isExpense;

            setEntries(newEntries);
            resetEntry();

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [isOpen]);

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

    const deleteEntry = (id) => {
        const result = entries.filter((x) => x.id !== id);
        setEntries(result);
    };

    const editEntry = (id) => {
        if (!id) return;

        const index = entries.findIndex((x) => x.id === id);
        const entry = entries[index];

        if (!entry) return;

        setEntryId(id);
        setDescription(entry.description);
        setValue(entry.value);
        setIsExpense(entry.isExpense);
        setIsOpen(true);
    };

    const addEntry = () => {
        const result = entries.concat({
            id: entries.length + 1,
            description,
            value,
            isExpense,
        });
        setEntries(result);
    };

    return (
        <Container>
            <MainHeader title='Budget' type='h1' />

            <Statistic size='small'>
                <Statistic.Label>Your Balance:</Statistic.Label>
                <Statistic.Value>{balance}</Statistic.Value>
            </Statistic>

            <DisplayBalances
                incomeTotal={incomeTotal}
                expensesTotal={expensesTotal}
            />

            <MainHeader title='History' type='h3' />

            <EntryLines
                entries={entries}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
            />

            <MainHeader title='Add new transaction' type='h3' />

            <NewEntryForm
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />

            <ModalEdit
                isOpen={isOpen}
                description={description}
                value={value}
                isExpense={isExpense}
                setIsOpen={setIsOpen}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
        </Container>
    );
}

export default App;

var initialEntries = [
    { id: 1, description: 'Work income', value: 2500, isExpense: false },
    { id: 2, description: 'Music', value: 500, isExpense: true },
];
