import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[count,setCount] =useState(0);
  const[total,setTotal] =useState(1);

  
  //variation 1
  // useEffect(() => {
  //   alert("i will run on each render")
  // })

  //variation  2
  // useEffect(() => {
  //   alert("i will run on each render")
  // }, [])
  
  //variation 3
  // useEffect(() => {
  //   alert("i will run on each render")
  // }, [count])
  
  //variation 4
  //   useEffect(() => {
  // alert ("i will run evrytime when  count/total is updated")
  // }, [count, total])

  //variation 5

  useEffect(() => {
    alert("count is updated")
  
    return () => {
      alert("count is unmounted")
    }
  }, [count])
  



function handleclick(){
    setCount(count+1);
  }
   function handleClickTotal(){
        setTotal(total+1);

   }

  return (
    <div>
      <button onClick={handleclick}>
        Update count
      </button>
      <br />
      count is: {count}
      <br />

      <button onClick={handleClickTotal}>
        Update total
      </button>
      <br />
       Total is: {total}
    </div>
  )
}

export default App
