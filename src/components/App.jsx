import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes((prevNote) => {
            return [...prevNote, note];
        });
    }

    function delNote(noteId) {
        setNotes(() => {
            return notes.filter((val, index) => {
                return noteId !== index;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, i) => {
                return (
                    <Note
                        key={i}
                        id={i}
                        title={note.title}
                        content={note.content}
                        onDel={delNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
