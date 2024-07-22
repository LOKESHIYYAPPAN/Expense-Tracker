import React from 'react'

const List = ({ item, show }) => {
  
  return (
    <li 
      style={item.type === "expense" ? { borderRight: "4px solid red" } : { borderRight: "4px solid green" } }
      className={show ? "show" : "" }
    >
      <p 
        className="text"
      >{item.text}</p>
      <p 
        className="amount" 
        style={item.type === "expense" ? { color: "red" } : { color: "green" }}
      >{item.type === "expense" ? "-" + item.amount : item.amount}</p>
    </li>
  )
}

export default List