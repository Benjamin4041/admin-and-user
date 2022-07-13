// import logo from './logo.svg';
// import './App.css';
import Btnpurple from "./Purplebuttons"
import BtnGreen from "./Greenbuttons";
function App() {
  return (
    <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",rowGap:"2em",height:"100vh"}}>
      <div style={{backgroundColor:"#651111",padding:"3em",color:"white"}}>
        <p style={{margin:"0 auto"}}>You requested to be an <b>Admin</b></p>
      </div>
      <span style={{display:"flex",columnGap:"2em"}}>
        <BtnGreen btnName="Admin"/>
        <Btnpurple btnName="User"/>
      </span>
    </div>
  );
}

export default App;
