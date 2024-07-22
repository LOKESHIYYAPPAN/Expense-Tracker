import React from 'react'
import List from './List'

const History = ({ transaction, show, handleMore }) => {
    return (
        <aside className="history">
            <h3 className='subtitle'>History</h3>
            <hr />
            <p 
                className="empty"
                style={transaction.length > 0 ? {display: "none"} : {display:"block"}}
            >No History</p>
            <ul>
                {
                    transaction.map(item => (
                        <List
                            item={item}
                            key={item.id}
                            show={show}
                        />
                    ))
                }
            </ul>
            <button
                className="more"
                style={transaction.length>4 ? {display:"block"} : {display:"none"}}
                onClick={() => handleMore()}
            >{show ? "-less" : "+more"}</button>
        </aside>
    )
}

export default History