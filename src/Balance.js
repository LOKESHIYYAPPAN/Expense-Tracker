import React from 'react'

const Balance = ({transaction, handleReset}) => {
  let income = 0
  let expense = 0
  if(transaction.length){
    transaction.forEach(element => {
      if(element.type==="expense"){
        expense += element.amount
      } else{
        income += element.amount
      }
    });
  }

  return (
    <section>
        <h3 className='subtitle'>Your Balance <button className='reset' onClick={handleReset} type='button'>reset</button></h3>
        <p className="balance">&#8377; {income-expense}</p>
        <aside className="statement">
            <div className="flow">
                <p className='type'>Income</p>
                <p className="rupee" style={{color:"green"}}>&#8377; {income}</p>
            </div>
            <hr />
            <div className="flow">
                <p className='type'>Expense</p>
                <p className="rupee" style={{color:"red"}}>&#8377; {expense}</p>
            </div>
        </aside>
    </section>
  )
}

export default Balance