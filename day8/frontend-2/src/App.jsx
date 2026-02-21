import { useState, useEffect } from 'react'
import axios from "axios"

function App(){
  const [notes, setnotes] = useState([])
  // console.log("Hello integration")

  useEffect (()=>{
     axios.get("http://localhost:3000/api/notes")
    .then(res=>{
      
      setnotes(res.data.notes || [])
    })

  },[])

  function handleSubmit(e){
    e.preventDefault()
    const{title,description}=e.target.elements
   console.log(title.value, description.value)
   axios.post("http://localhost:3000/notes",{
    title:title.value,
    description:description.value
   })
   .then(res=>{
    console.log(res.data)
    fetchnotes()
   })
  }
   

  return(
    <>
  <form className='note-create-form' onSubmit={handleSubmit}>
    <input name='title' type="text" placeholder='Enter the title' />
    <input name='description' type="text" placeholder='Enter the Description' />
    <button>Create note</button>
  </form>

    <div className="notes">
      {notes.map(note => (
        <div className="note" key={note._id}>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
        </div>
      ))}
     <div className="notes">
      <div className="note">
        <h1>title 1</h1>
        <p>descrption 1</p>
      </div>
       <div className="note">
        <h1>title 1</h1>
        <p>descrption 1</p>
      </div>
     </div>
    </div>
    </>
  )
}

export default App
