import { useState, useEffect } from "react";
import NoteList from "./component/NoteList";
import NoteDetails from "./component/NoteDetails";
import NoteForm from "./component/NoteForm";
import './App.css';

function App() {
    const [notes, setNotes] = useState(() => {
        const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        return storedNotes;
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const [selectedNote, setSelectedNote] = useState(null); // State to track selected note

    const addNote = (noteContent) => {
        const newNote = { id: Date.now(), title: "Note", content: noteContent };
        setNotes([...notes, newNote]);
    };

    // Function to select a note for detailed view
    const handleNoteSelect = (note) => {
        setSelectedNote(note);
    };

    // Function to delete a note
    const deleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    };

    // Function to go back to the main list
    const handleBack = () => {
        setSelectedNote(null);
    };

    return (
        <div>
            <h1>Notes App</h1>
            <NoteForm onAddNote={addNote} />
            {selectedNote ? (
                <NoteDetails note={selectedNote} onBack={handleBack} />
            ) : (
                <NoteList noteList={notes} onNoteSelect={handleNoteSelect} onDeleteNote={deleteNote} />
            )}
        </div>
    );
}

export default App;
