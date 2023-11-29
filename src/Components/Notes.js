import React from "react";
import { useContext, useEffect } from "react";
import noteContext from "../Context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

function Notes(props) {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    }else{
      navigate('/login')
    }
  }, []);

  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    // ref.toggle();
    handleShow();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    console.log("Updating the note....", note);
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    handleClose();
    props.showAlert("Note updated Successfully", "success");
  };

  const close = (e) => {
    console.log("Updating the note....", note);
    editNote(note.id, note.title, note.description, note.tag);
    handleClose();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <Button
        ref={ref}
        variant="primary"
        className="d-none"
        onClick={handleShow}
      >
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="etitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="etitle"
                onChange={onChange}
                value={note.etitle}
                minLength={5}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="edescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="edescription"
                onChange={onChange}
                value={note.edescription}
                minLength={5}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="etag">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                name="etag"
                onChange={onChange}
                value={note.etag}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={note.etitle.length < 5 || note.edescription.length < 5}
            variant="primary"
            onClick={handleClick}
          >
            Update notes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row my-3">
        <h3>Your Notes: </h3>
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display!"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              updateNote={updateNote}
              showAlert={props.showAlert}
              note={note}
            />
          );
        })}
      </div>
    </>
  );
}

export default Notes;
