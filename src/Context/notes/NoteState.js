import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // TODO Api Call
    const response = await fetch(`${host}/api/Notes/fetchallnote`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1Y2E3OTgwNDRhYzM2NTJiNWQ3YTFmIn0sImlhdCI6MTcwMDY1MDA1MH0.fVlTAEaio9y9P-png-o0Vi4doRZEGmeZoN9t1Nl66Qo",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO Api Call
    const response = await fetch(`${host}/api/Notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1Y2E3OTgwNDRhYzM2NTJiNWQ3YTFmIn0sImlhdCI6MTcwMDY1MDA1MH0.fVlTAEaio9y9P-png-o0Vi4doRZEGmeZoN9t1Nl66Qo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
    //
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // TODO Api Call
    const response = await fetch(`${host}/api/Notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1Y2E3OTgwNDRhYzM2NTJiNWQ3YTFmIn0sImlhdCI6MTcwMDY1MDA1MH0.fVlTAEaio9y9P-png-o0Vi4doRZEGmeZoN9t1Nl66Qo",
      },
    });
    const json = await response.json();
    //
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/Notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1Y2E3OTgwNDRhYzM2NTJiNWQ3YTFmIn0sImlhdCI6MTcwMDY1MDA1MH0.fVlTAEaio9y9P-png-o0Vi4doRZEGmeZoN9t1Nl66Qo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
