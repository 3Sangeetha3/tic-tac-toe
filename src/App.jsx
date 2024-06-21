import './App.css'
//React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
//There can be only one return statement in the component or else they must be wrapped in a enclosing tag i.e, a fragemnt or div. We cannot have adjacent jsx.

//creating a component for squares in tic-tac-toe game

function Square({value}) {
  function handleClick () {
    alert(`${value} is clicked`);
  }
  return <button onClick={handleClick} className='square'>{value}</button>
}


function Board() {
  return (
    <>
      <div className='board-row'>
        <Square value="1"/>
        <Square value={2}/>
        <Square value={3}/>
      </div>
      <div className='board-row'>
        <Square value={4}/>
        <Square value={5}/>
        <Square value={6}/>
      </div>
      <div className='board-row'>
        <Square value={7}/> 
        <Square value={8}/>
        <Square value={9}/>
      </div>
    </>
  )
}



function App() {

  return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </div>
  )
}

export default App
