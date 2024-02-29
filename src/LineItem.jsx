import React from 'react';
const LineItem = ({item,handleCheck,handleDelete,FaTrashAlt }) => {
  const year = new Date()
  return (
    <li>
      <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
      <label style={(item.checked) ? { textDecoration: 'line-through' } : null} onDoubleClick={() => handleCheck(item.id)} > {item.item}</label>
      <FaTrashAlt onClick={() => handleDelete(item.id)}
      tabIndex = "0"
      aria-label = {`delete ${item.item}`} />
    </li>
  );
};

export default LineItem;
