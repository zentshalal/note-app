import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Empty from "./components/Empty";
import AddNoteMenu from "./components/AddNoteMenu";
import DeleteMenu from "./components/DeleteMenu";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  function addNote(e) {
    e.preventDefault();
    const title = document.querySelector(".add-note-menu input").value.trim();
    const content = document.querySelector(".add-note-menu textarea").value.trim();

    if (title === "" && content === "") {
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      content
    };

    setNotes(prev => [newNote, ...prev]);

    document.querySelector(".add-note-menu input").value = "";
    document.querySelector(".add-note-menu textarea").value = "";
    document.querySelector(".add-note-menu").classList.add("invisible");
  }

  function delNote(e) {
    const updatedNotes = notes.filter(note => note.id !== parseInt(e.target.dataset.id));

    setNotes([...updatedNotes]);

    document.querySelector(".delete-menu").classList.add("invisible");
  }

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
      <AddNoteMenu saveNote={(e) => addNote(e)} />
      <DeleteMenu deleteNote={(e) => delNote(e)} />
    </main>
  )
}

export default App;