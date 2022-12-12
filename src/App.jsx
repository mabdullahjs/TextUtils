import './App.css';
import Textarea from "./components/textbar"
import Navbar from './components/navbar';
import React , {useState} from 'react'
import Alert from './components/alert.jsx';


function App() {
  const [mode , changeMode] = useState("light");
  const [alert , setAlert] = useState(null);
  function showAlert(type , message){
    setAlert({
      type: type,
      message: message
    })
    setTimeout(()=>{
      setAlert(null)
    } , 1500)
  }


  function changeColor(){
    if(mode === "light"){
      changeMode("dark");
      document.body.style.backgroundColor = "black"
      showAlert("success" , "Light mode enable")
    }else{
      changeMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("success" , "Dark mode enable")
    }
  }
  return (
    <div>
      <Navbar mode = {mode} func = {changeColor}/>
      <Alert alert = {alert}/>
      <Textarea showAlert = {showAlert} mode = {mode} alert = {showAlert} />
    </div>
  );
}

export default App;