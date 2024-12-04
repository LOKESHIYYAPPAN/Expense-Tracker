import { useEffect, useState } from 'react';
import './App.css';
import Balance from './Balance';
import Form from './Form';
import Header from './Header';
import History from './History';
import Alert from './Alert';

function App() {
  useEffect(() => {
    setTransaction(JSON.parse(localStorage.getItem("transaction")) || [])
  }, [])

  const [transaction, setTransaction] = useState([])
  const [txt, setTxt] = useState("")
  const [amount, setAmount] = useState("")
  const [show, setShow] = useState(false)
  const [type, setType] = useState("income")
  const [dialogShown, setDialogShown] = useState(false)
  const [dialogMsg, setDialogMsg] = useState('')

  const formSubmit = (e) => {
    e.preventDefault();
    let maxId = 0;
    for (let i = 0; i < transaction.length; i++) {
      maxId = Math.max(transaction[i].id, maxId)
    }
    const newItem = { id: maxId + 1, amount: amount, text: txt, type }
    const allItems = [newItem, ...transaction]
    setAmount("")
    setTxt("")
    setTransaction(allItems)
    localStorage.setItem("transaction", JSON.stringify(allItems))

  }

  const handleMore = () => {
    setShow(show ? false : true)
  }

  const handleReset = () => {
    localStorage.removeItem("transaction")
    window.location.reload();
  }

  const conformReset = () => {
    setDialogShown(true)
    setDialogMsg('Confirm to delete your data ?')
  }

  const cancelReset = () => {
    setDialogShown(false)
  }

  return (
    <div className="App">
      <Header title="expense tracker" />
      <Balance
        transaction={transaction}
        conformReset={conformReset}
      />
      <History
        transaction={transaction}
        show={show}
        handleMore={handleMore}
      />
      <Form
        txt={txt}
        setTxt={setTxt}
        amount={amount}
        setAmount={setAmount}
        formSubmit={formSubmit}
        setType={setType}
      />
      <Alert
        dialogShown={dialogShown}
        dialogMsg={dialogMsg}
        handleReset={handleReset}
        cancelReset={cancelReset}
      />
    </div>
  );
}

export default App;
