import React from "react";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Text className="text-muted">
            Enter any text to continue searching
          </Form.Text>

          <Form.Control type="text" placeholder="Juggernaut" />
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchBar;
