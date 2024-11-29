import { useState } from 'react'


function App() {
  const [inputValue, setInputValue]= useState('')
  const handle=(e)=>{
    setInputValue(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div><input 
     value ={inputValue}
    onChange={handle}
    />
    
    </div>
  )
}

export default App
