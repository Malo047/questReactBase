import React from 'react';
  
const Text = ({ text, color }) => {

  return (
    <div>
      <h1 style={{ color: color }}>{text.toUpperCase()}</h1>
    </div>
  )
}


export default Text;