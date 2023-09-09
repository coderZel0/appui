import "./App.css";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import NumField from "./components/form/Numfield";

function App() {
  const [ouput, setOutput] = useState(0);
  const [sample, setSample] = useState(0);
  const textFieldStyle = {
    padding: "8px",
    borderRadius: "6px",
  };
  const calcOutput = (values) => {};

  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      className="App"
    >
      <div className="form-container">
        <div style={{ margin: "10px" }}>Sample No. {sample}</div>
        <Formik
          initialValues={{
            deflection1: null,
            deflection2: null,
            deflection3: null,
            temp1: null,
            temp2: null,
            temp3: null,
          }}
          onSubmit={(values) => alert(Object.values(values))}
        >
          <Form>
            <div
              style={{
                display: "flex",
                width: "100%",
                margin: "25px 0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",

                  alignItems: "center",
                }}
              >
                <NumField
                  label={"Deflection 1:"}
                  id={"deflection1"}
                  name={"deflection1"}
                  placeholder={"Enter deflection"}
                />
                <NumField
                  label={"Deflection 2:"}
                  id={"deflection2"}
                  name={"deflection2"}
                  placeholder={"Enter deflection"}
                />
                <NumField
                  label={"Deflection 3:"}
                  id={"deflection3"}
                  name={"deflection3"}
                  placeholder={"Enter deflection"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <NumField
                  id={"temp1"}
                  name={"temp1"}
                  placeholder={"Enter temperature"}
                  label={"Temperature 1:"}
                />
                <NumField
                  id={"temp2"}
                  name={"temp2"}
                  placeholder={"Enter temperature"}
                  label={"Temperature 2:"}
                />
                <NumField
                  id={"temp3"}
                  name={"temp3"}
                  placeholder={"Enter temperature"}
                  label={"Temperature 3:"}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px 0px",
              }}
            >
              <button style={{ padding: "8px 10px", borderRadius: "6px" }}>
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default App;
