import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const Data = {
    name: "",
    password: "",
    email: "",
    mnumber: "",
  };
  const [data, setData] = useState(Data);
  const [formErrors, setFormErrors] = useState({});
 

  const hendleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = () => {};

  useEffect(() => {
    setFormErrors(validation(data));
  }, [data]);

  const validation = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!values.name) {
      error.name = "name is required";
    } else if (!values.name.match(/^[a-zA-Z]+$/)) {
      error.name = "Only alphabet";
    }
    if (!values.password) {
      error.password = "Please Enter Password";
    } else if (values.password.length < 8) {
      error.password = "minimum length of the password is 8";
    }
    if (!values.email) {
      error.email = "Please Enter Email ";
    } else if (!values.email.match(regex)) {
      error.email = "Enter Valid Email";
    }
    if (!values.mnumber) {
      error.mnumber = "Please Enter Mobile Number";
    } else if (values.mnumber.length!==10) {
      error.mnumber = "Enter Vaild Mobile Number";
    } else if (!values.mnumber.match(/^[0-9\b]+$/)) {
      error.mnumber = "Enter Valid mobile number";
    }
  
    return error;
  };

  return (
    <>
      <div className="App">
        <h2>Form</h2>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={hendleChange}
        />
        {formErrors.name}
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={hendleChange}
        />
        {formErrors.password}
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={hendleChange}
        />
        {formErrors.email}
        <br />
        <label>Mnumber:</label>
        <input
          type="text"
          name="mnumber"
          value={data.mnumber}
          onChange={hendleChange}
          maxLength={10} 
        />
        {formErrors.mnumber}
        <br />
        {Object.keys(formErrors).length===0? (
          <button disabled={false} onClick={submit}>
            
            Submit
          </button>
        ) : (
          <button disabled={true} onClick={submit}>
            Submit
          </button>
        )}
      </div>
    </>
  );
}

export default App;
