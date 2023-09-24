import { useState } from "react";
import { toast, Zoom } from "react-toastify";
import "./App.css";

function App() {
  const notify = (message) =>
    toast(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  const [formdata, setformdata] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    {
      const { name, value } = e.target;
      setformdata({ ...formdata, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.username.trim().length < 1) {
      notify("The username can not be empty");
    }
  };
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button className="button" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
}

export default App;
