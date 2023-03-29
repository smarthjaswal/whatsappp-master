import './App.css';
import Sidebar from './Component/Sidebar';
import Chat from "./Component/Chat";
function App() {
  return (
     // BEM naming convention
     <div className="App">

     <div className="app_body">
       <Sidebar/>
       <Chat/>
      

     </div>

   </div>
  );
}

export default App;
