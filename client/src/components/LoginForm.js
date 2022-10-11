import { Fragment, useState } from "react";
function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  // handleonchangedata
  function onChangeValue(e) {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  }

  //   handle submitted data
  function handleSubmit(e) {
    e.preventDefault();
    const logInUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    fetch("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logInUser),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          setFormData({
            ...formData,
            name: "",
            email: "",
            password: "",
          });
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  // .then((res) => res.json())
  // .then((user) => {
  //   onLogin(user);
  //   setFormData({
  //     ...formData,
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  // });

  return (
    <Fragment>
      <div className="container">
        <div className="row g-3">
          <h1>LoginForm</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                aria-describedby="emailHelp"
                name="name"
                value={formData.name}
                onChange={onChangeValue}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="email"
                value={formData.email}
                onChange={onChangeValue}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={onChangeValue}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary">
              Submit
            </button>
            {/* <form>
              {errors.map((err) => (
                <p key={err}>{err}</p>
              ))}
            </form> */}
          </form>
        </div>
      </div>
    </Fragment>
  );
}
export default LoginForm;
