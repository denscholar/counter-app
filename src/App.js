import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useState } from 'react';
import './App.scss';


function App() {
  const [count, setCount] = useState(0);

  const handleSubtract =()=>{
    setCount(count - 1)
  }

  const handleAdd =()=>{
    setCount(count + 1)
  }

  const handleReset =()=>{
    setCount(0);
  }

  let color = 'white';

  if(count >= 10){
    color = 'green';
  }else if(count < 0){
    color = 'red';
  }else{
    color = 'white';
  }


  
  return (
    <section className="App">
      <div className='counter-container'>
        <h2>Counter Application</h2>
        <p style={{
          color: color
        }}>{count}</p>
        <div className='buttons_container'>
          <button onClick={handleSubtract}><RemoveIcon/>Subtract</button>
          <button onClick={handleReset}><RestartAltIcon/>Reset</button>
          <button onClick={handleAdd}><AddCircleIcon/>Add</button>
        </div>
      </div>
    </section>
  );
}

export default App;
