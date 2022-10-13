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
      ...formData,
      [e.target.name]: e.target.value,
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

    fetch("/login", {
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

  return (
    <Fragment>
      <div className="container w-50 mt-4 card card-body py-5 px-md-5">
        <div className="row">
          <h1 className="text-center">Login</h1>
          <form className="w-60">
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
            <div className="bg-danger  w-5 mt-2">
              {errors.map((err) => (
                <p key={err}>{err}</p>
              ))}
            </div>
          </form>
        </div>
      </div>
     
    </Fragment>
  );
}
export default LoginForm;
