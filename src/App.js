import "./App.css";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import NumField from "./components/form/Numfield";
import Linechart from "./components/chart/Linechart";

function App() {
  const [ouput, setOutput] = useState(0);
  const [sample, setSample] = useState(0);
  const [linedata, setData] = useState([{ deflection: 0, temo: 0 }]);

  const textFieldStyle = {
    padding: "8px",
    borderRadius: "6px",
  };
  const calcOutput = (values) => {
    let a,
      b = 82,
      pin = 9.859,
      s,
      fpin,
      c,
      m;

    const denominator = Number(values.temp2) - Number(values.temp1);
    if (denominator === 0) return "slope infinity";
    m = (Number(values.deflection2) - Number(values.deflection1)) / denominator;
    console.log(typeof values.temp1);
    console.log(m);

    c = Number(values.deflection1) - m * Number(values.temp1);
    console.log("c", c);

    a = (0.4 - c) / m;
    s = 0.4 * m;
    fpin = (b - a) * s + pin;

    return fpin;
  };
  const createGraphData = (values) => {
    const s = new Set();
    let arr = [];
    Object.keys(values)
      .splice(0, 3)
      .map((item, i) => {
        const obj = {
          name: item,
          deflection: values[`${item}`],
          temp: values[`temp${i + 1}`],
        };
        if (!s.has(JSON.stringify(obj))) arr.push(obj);
        s.add(JSON.stringify(obj));
      });
    return arr;
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="App"
    >
      <div className="form-container">
        <div style={{ margin: "10px" }}>Sample No. {sample}</div>
        <Formik
          initialValues={{
            deflection1: "",
            deflection2: "",
            deflection3: "",
            temp1: "",
            temp2: "",
            temp3: "",
          }}
          onSubmit={(values) => {
            const data = createGraphData(values);
            console.log(data);
            setData(data);
            setOutput(calcOutput(values));
          }}
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
              <button
                type="submit"
                style={{ padding: "8px 10px", borderRadius: "6px" }}
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      {/* Chart */}
      <div
        style={{
          width: "70%",
          margin: "18px 0px",
        }}
      >
        <Linechart data={linedata} />
      </div>

      {/* Ouput */}
      <div
        style={{
          width: "70%",
          margin: "18px 0px",
        }}
      >
        <div
          style={{
            width: "fit-content",
            border: "1px solid green",
            borderRadius: "6px",
            padding: "6px",
            margin: "0px 12px",
            display: "flex",
            background: "rgb(235, 241, 241)",
          }}
        >
          <span>Output/Pin length:-</span>
          <strong style={{ margin: "0px 6x" }}>{ouput}</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
