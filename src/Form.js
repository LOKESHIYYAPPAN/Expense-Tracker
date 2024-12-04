import React from 'react'

const Form = ({ amount, setAmount, txt, setTxt, formSubmit, setType }) => {
  return (
    <main>
      <h3 className='subtitle'>Add new transaction</h3>
      <hr />
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          name='text'
          id='text'
          value={txt}
          required
          onChange={(e) => setTxt(e.target.value)}
        />
        <label htmlFor="type">
          Transaction Type
        </label>
        <div className="selectContainer">
          <select
            name="type"
            id="type"
            onChange={e => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          required
          onChange={e => setAmount(Number(e.target.value))}
        />
        <button
          className='submitBtn'
          type='submit'
        >Add transaction</button>
      </form>
    </main>
  )
}

export default Form