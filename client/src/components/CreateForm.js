import { Fragment, useState } from "react";
function CreateForm({ onSignIn }) {
  const [signInData, setSignInData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  // handleonchangedata
  function onChangeValue(e) {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  }

  //   handle submitted data
  function handleSubmit(e) {
    e.preventDefault();
    const signInUser = {
      name: signInData.name,
      email: signInData.email,
      password: signInData.password,
    };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInUser),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onSignIn(user);
          setSignInData({
            ...signInData,
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
      
      <div className="container">
        <div className="row g-3">
          <h1>Create User</h1>
          <form className="border rounded-top p-3">
            <div className="">
              <label className="form-label">Name</label>
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="1"
                name="name"
                value={signInData.name}
                onChange={onChangeValue}></textarea>
            </div>

            <div className="">
              <label className="form-label">Email</label>
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="1"
                name="email"
                value={signInData.email}
                onChange={onChangeValue}></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={signInData.password}
                onChange={onChangeValue}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-2"
              onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
export default CreateForm;
