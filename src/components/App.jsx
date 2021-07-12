import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Notes from "../notes";

function App() {
    return (
        <div>
            <Header />
            {Notes.map((notesItem) => {
                return (
                    <Note
                        key={notesItem.key}
                        title={notesItem.title}
                        content={notesItem.content}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;