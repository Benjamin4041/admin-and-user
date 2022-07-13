// import logo from './logo.svg';
// import './App.css';
import Btnpurple from "./Purplebuttons"
import BtnGreen from "./Greenbuttons";
function App() {
  return (
    <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",rowGap:"2em",height:"100vh"}}>
      <div style={{backgroundColor:"#651111",padding:"3em",color:"white"}}>
        <p style={{width:"65%",margin:"0 auto"}}>Please ,make a request by clicking any of the buttons below</p>
      </div>
      <span style={{display:"flex",columnGap:"2em"}}>
        <Btnpurple btnName="Admin"/>
        <Btnpurple btnName="User"/>
      </span>
    </div>
  );
}

export default App;
