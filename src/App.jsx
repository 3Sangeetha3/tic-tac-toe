import './App.css'

//creating a component for squares in tic-tac-toe game

function Square() {
  return <button className='square'>X</button>
}

function App() {

  return (
      <div>
        <h1>Tic-tac-toe</h1>
        <Square />
      </div>
  )
}

export default App
