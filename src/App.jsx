import './App.css'
//React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
//There can be only one return statement in the component or else they must be wrapped in a enclosing tag i.e, a fragemnt or div. We cannot have adjacent jsx.

//creating a component for squares in tic-tac-toe game

function Square() {
  return (
    <>
      <div className='board-row'>
        <button className='square'>X</button>
        <button className='square'>X</button>
        <button className='square'>X</button>
      </div>
      <div className='board-row'>
        <button className='square'>X</button>
        <button className='square'>X</button>
        <button className='square'>X</button>
      </div>
      <div className='board-row'>
        <button className='square'>X</button>
        <button className='square'>X</button>
        <button className='square'>X</button>
      </div>
    </>
  )
}

function App() {

  return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <Square />
      </div>
  )
}

export default App
