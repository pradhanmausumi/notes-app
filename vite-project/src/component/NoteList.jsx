function NoteList({ noteList, onNoteSelect, onDeleteNote }) {
    return (
        <div>
            {noteList.map((note) => (
                <div key={note.id} className="note-item">
                    <div>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                    </div>
                    <button className="view-details-btn" onClick={() => onNoteSelect(note)}>
                        View Details
                    </button>
                    <button onClick={() => onDeleteNote(note.id)} className="delete-btn">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default NoteList;
