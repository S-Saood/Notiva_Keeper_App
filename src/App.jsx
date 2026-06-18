import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  
  const [notes, setNotes] = useState(() =>{  
      const savedNotes = localStorage.getItem("notes");
      return savedNotes ? JSON.parse(savedNotes) : [];
      /*savedNotes added into local storage otherwise empty array(ternory operator)*/
  });


  const filterNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  )



  // Save notes to localStorage whenever notes state changes(Dependency array (note))
  useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);




  //adding note 
  function addNote(newNote, event) {
    
    setNotes(prevNotes => [
      ...prevNotes, 
        newNote
      ]);
  }



  //deleting note
  function deleteNote(id) {
  setNotes(prevNotes =>
    prevNotes.filter((noteItem, index) => 
      index !== id)
  );
}




  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} 
      darkMode={darkMode}
      setDarkMode={setDarkMode}/>
      <CreateArea onAdd={addNote} />

      <div className="notes-container">
      {filterNotes.map((noteItem, index) => (
        
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
