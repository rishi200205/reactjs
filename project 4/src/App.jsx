import './App.css'

function App() {
  function handleClick(){
    alert("I am clickied");
  }
  function handleMouseOver(){
    alert("you are on para");
  }
  function handleInputChange(e){
    console.log("value till now", e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("form submit kardu kya");
  }

  return (
   <div>
    <form>
      <input type="text" onChange={handleInputChange} />
      <button type='submit' onSubmit={handleSubmit}>Submit</button>
    </form>
    <p onMouseOver={handleMouseOver}>
      i am para
    </p>
    <button onClick={handleClick}>
      click me
    </button>
   </div>
  )
}

export default App 
