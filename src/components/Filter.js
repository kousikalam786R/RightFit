import React from "react";
import { Form } from "react-bootstrap";

const Filter = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "10px",
        height: "86vh",
      }}
    >
      <h5>Filter Products</h5>
      <span>
        <Form.Check
          inline
          label="Materials"
          name="group1"
          type="radio"
          id={`inline-1`}
        ></Form.Check>
      </span>
      <span>
        <Form.Check
          inline
          label="Materials"
          name="group1"
          type="radio"
          id={`inline-1`}
        ></Form.Check>
      </span>
      <span>
        <Form.Check
          inline
          label="Materials"
          name="group1"
          type="radio"
          id={`inline-1`}
        ></Form.Check>
      </span>
      <span>
        <Form.Check
          inline
          label="Materials"
          name="group1"
          type="radio"
          id={`inline-1`}
        ></Form.Check>
      </span>
    </div>
  );
};

export default Filter;
