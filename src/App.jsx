import { useState } from 'react';
import './App.css'
//React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
//There can be only one return statement in the component or else they must be wrapped in a enclosing tag i.e, a fragemnt or div. We cannot have adjacent jsx.

//creating a component for squares in tic-tac-toe game

function Square() {

  const [value, setValue] = useState(null);

  function handleClick () {
    setValue('X')
    // alert(`${value} is clicked`)
  }

  console.log(`square rendered`)
  return <button onClick={handleClick} className='square'>{value}</button>
}


function Board() {
  console.log(`Board rendered`)

  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square /> 
        <Square />
        <Square />
      </div>
    </>
  )
}



function App() {
  console.log('App rendered')
  return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </div>
  )
}

export default App
