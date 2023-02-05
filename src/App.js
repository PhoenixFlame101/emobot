import logo from './ZenTrack.png';
import './App.css';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import React from 'react';
import { useFormik } from 'formik';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Dictaphone from './voice';

const baseURL = "http://zentrack.pagekite.me/";

function refreshPage() {
  window.location.reload();
}

const App = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      msg: '',
    },
    onSubmit: values => {
      axios.get(baseURL,).then((response) => {
        //alert(response.data.body)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <p style={{ color: "#FFFFFF" }}>{response.data.body}</p>
          </React.StrictMode>
        );
      })
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <body>
        <div className='Chat'>
          <img src={logo} alt="logo" />
          <h2>How can I help?</h2>
          <h4 style={{ color: "#FFF" }}>Text Input </h4>
          <form onSubmit={formik.handleSubmit}>
            <label>&gt;&gt;&gt;</label>
            <input
              id="msg"
              name="msg"
              style={{ border: 0 }}
              onChange={formik.handleChange}
              value={formik.values.msg}
            />
          </form>
        </div>
        <Dictaphone />
      </body>
    </>
  );
};

export default App;
