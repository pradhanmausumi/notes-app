// NoteForm.jsx
import  { useState } from "react";

function NoteForm({ onAddNote }) {
    const [note, setNote] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddNote(note);
        setNote("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter notes here"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default NoteForm;
