import { useContext} from 'react';
import './App.css';
import Header_bar from './Header_bar';
import Stories from './Stories';
import Feed from './Feed';


function App() {
  
  // const [data , setdata] = useContext(store)
  //  const data = false

  return (

    <div className="App">
     <Header_bar/>
     <Stories/>
    </div>
  );
}

export default App;
