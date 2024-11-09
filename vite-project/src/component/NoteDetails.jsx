// NoteDetails.jsx

function NoteDetails({ note, onBack }) {
    return (
        <div className="note-details-card">
            <button className="back-btn" onClick={onBack}>Back to List</button>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
    );
}

export default NoteDetails;
