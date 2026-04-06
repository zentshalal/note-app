import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Empty from "./components/Empty";
import AddNoteMenu from "./components/AddNoteMenu";

function App() {
  const [notes, setNotes] = useState([])

  function loadNotes() {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  }

  useEffect(() => {
    setNotes(loadNotes());
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])
  
  return (
    <main>
      <Navbar/>
      <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {notes.length === 0
          ? <Empty />
          : notes.map(note => <Card key={note.id} card={note} />)}
      </div>
      <AddNoteMenu />
    </main>
  )
}

export default App;