import React from "react";
import { Field } from "formik";

const NumField = ({ name, id, placeholder, label }) => {
  const textFieldStyle = {
    padding: "8px",
    borderRadius: "6px",
    // border: "none",
  };
  return (
    <div style={{ margin: "6px 0px" }}>
      <label htmlFor={id}>{label} </label>
      <Field name={name} id={id}>
        {({ field, form }) => (
          <input
            type="number"
            {...field}
            style={textFieldStyle}
            placeholder={placeholder}
          />
        )}
      </Field>
    </div>
  );
};

export default NumField;
