import React, {useState} from 'react';
import TextForm from './componets/TextForm';
import './App.css';
// import About from './componets/About';
import NavBar from './componets/NavBar';
import Alert from './componets/Alert';
// import { BrowserRouter as Main, 
//         Routes, 
//         Route,
//         Link
//        } from 'react-router-dom';


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode=()=>{
      if(mode==='dark'){
        setMode('light');
        document.body.style.backgroundColor="white";
        showAlert("Light mode has been enabled", "success");
      }
      else{
        setMode('dark');
        document.body.style.backgroundColor="#042743";
        showAlert("Dark has been enabled", "success");
      }

  }



  return (
    <>
    {/* <Main> */}
      <NavBar title='TextUtils' about='About Utils' mode={mode} toggle={toggleMode} />

      <Alert alert={alert}></Alert>
      
      <div className="container my-3">
        {/* <Routes>  */}
          {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading='Enter you Analyze' mode={mode} />} /> 
          <Route exact path='/about' element={ <About />} />
         
        </Routes> */}
        <TextForm showAlert={showAlert} heading='Enter you Analyze' mode={mode}/>
      </div>
    {/* </Main> */}
    </>
  );
}

export default App;
