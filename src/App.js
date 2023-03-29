import './App.css';
import Sidebar from './Component/Sidebar';
import Chat from "./Component/Chat";
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
     // BEM naming convention
     <div className="App">

     <div className="app_body">
      <Router>
        
       <Sidebar/>
       <Chat/>
       
       </Router>
      

     </div>

   </div>
  );
}

export default App;
