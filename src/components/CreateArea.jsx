import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            };
        });
    }

    function sumbitNote(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote(() => {
            return {
                title: "",
                content: ""
            };
        });
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={note.title}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    onChange={handleChange}
                    value={note.content}
                />
                <button onClick={sumbitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
