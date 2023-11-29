import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import noteContext from "../Context/notes/noteContext";
import { useContext } from "react";
import { useState } from "react";

function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    })
    props.showAlert("Note Added Successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={note.title}
            name="title"
            onChange={onChange}
            minLength={5}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={note.description}
            name="description"
            onChange={onChange}
            minLength={5}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tag">
          <Form.Label>Tag</Form.Label>
          <Form.Control
            type="text"
            value={note.tag}
            name="tag"
            placeholder=""
            onChange={onChange}
          />
        </Form.Group>
        <Button
          disabled={note.title.length < 5 || note.description.length < 5}
          variant="primary"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddNote;
