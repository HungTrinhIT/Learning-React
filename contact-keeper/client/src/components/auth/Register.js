import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
const Register = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      setAlert("Please fill in all fields", "danger");
    } else if (password !== password2) {
      setAlert(
        "Password2 is not equals to password, please type again",
        "danger"
      );
    }
  };
  return (
    <div className="form-container">
      <h2 className="form__title">
        register <span className="text-primary">account</span>
      </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form__input-item">
          <label>
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form__input-item">
          <label>
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form__input-item">
          <label>
            Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChangeHandler}
            required
            minLength="6"
          />
        </div>
        <div className="form__input-item">
          <label>
            Confirmed Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            value={password2}
            name="password2"
            onChange={onChangeHandler}
            required
            minLength="6"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
