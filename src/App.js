import React, { useState, useEffect } from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import SideBar from './Components/SideBar/SideBar';
import './App.css';

function App() {
  const [notes,setNotes] = useState(
    JSON.parse(localStorage.getItem('my_notes')) || []
  );

  const addNote=(color) => {
    const tempNotes=[...notes]

    tempNotes.push({
      id:Date.now() + ""+ Math.floor(Math.random()*30),
      text:'',
      time:Date.now(),
      color,
  });
setNotes(tempNotes); 
};


const deleteNote=(id)=>{
  const tempDelete=[...notes]
  const index = tempDelete.findIndex(item=>item.id===id)
  if(index<0)return

  tempDelete.splice(index,1);
  setNotes(tempDelete);
};

useEffect(()=>{
  localStorage.setItem('my_notes',JSON.stringify(notes))
},[notes])

const updateText=(text,id)=>{
  const tempNotes=[...notes]

  const index = tempNotes.findIndex(item=>item.id===id);
  if(index<0)return;

  tempNotes[index].text=text;
  setNotes(tempNotes);
  
};

  return (
    <div className="App">
      <SideBar addNote={addNote}/>
      <NoteContainer notes={notes}
      deleteNote={deleteNote}
      updateText={updateText}
      />
      
    </div>
  );
}

export default App;