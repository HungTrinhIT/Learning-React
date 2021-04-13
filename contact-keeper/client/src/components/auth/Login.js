import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const { username, password } = login;
  const onChangeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <h2 className="form__title">
        <span className="text-primary">login</span>
      </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form__input-item">
          <label>
            Username <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form__input-item">
          <label>
            Password <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            value={password}
            name="password"
            onChange={onChangeHandler}
            required
          />
        </div>

        <div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};
export default Login;
