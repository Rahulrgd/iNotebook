import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-4">
      <Card className="my-3" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.description}</Card.Text>
          <div className="continer align-item-center">
            <Row>
              <Col>
                <i
                  className="bi bi-trash mx-2"
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Note deleted Successfully", "danger");
                  }}
                ></i>
              </Col>
              <Col>
                <i
                  className="bi bi-pencil-square mx-2 d-flex justify-content-end"
                  onClick={() => {
                    updateNote(note);
                  }}
                ></i>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NoteItem;
