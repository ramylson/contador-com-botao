import { useState } from 'react'
import './App.css'
import ItemCount from './ItemCount'

function App() {
  const handleAdd = (quantity) => {
    console.log(`Adicionar ${quantity} itens`);
  };
  return (
    <div>
      <ItemCount estoque={10} inicial={1} add={handleAdd} />
    </div>
  )
}

export default App
