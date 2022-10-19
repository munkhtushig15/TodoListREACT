import './App.css';
import {useState} from "react";


  function App() {
    
    const [inputValue , setInputValue] = useState("");
    const [bichver , setTexts] = useState([]);

    function clicker() {
      setTexts([...bichver, inputValue]);  
    }
    function deleteTask() {
      const newBichver = bichver.filter((_, index) => index !== 0);
      setTexts(newBichver);
    }
    
    const  AddTasks = (props) => {
      return (
        <div className="taskLists">
          <div className="leftSide">
            <input type="checkbox" className='jagsaalt'/>
            <span className="tasks">{props.text}</span>
          </div>
          <button className="trash" onClick={deleteTask}>X</button>
        </div>
      )
    }
   
    return (
      <div className="container">
        <h1>To-do list</h1>
        <div className="newTaskMaker">
          <input type="text" placeholder="New Task" onChange={(e) => {
            setInputValue(e.target.value);
          }}/>
          <button onClick={clicker}>Add Tasks</button>
        </div>
        <div className='listContainer'>
          {bichver.map((bichvers) => {
            return <AddTasks key={bichvers + 1} text={bichvers} />
          })}
        </div>
      </div>
    )
  }

export default App;
