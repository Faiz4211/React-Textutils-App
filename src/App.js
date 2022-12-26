import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1e1c1c';
      showAlert("Dark Mode has been enable", "success");
      document.title = 'Textutils - DarkMode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode has been enable", "success");
      document.title = 'Textutils - LightMode';
    }
  }

  return (
    <>
      <Navbar navText={'TextUtils'} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm heading={'Enter the text to Analyze'} mode={mode} />
      </div>
    </>
  );
}

export default App; 