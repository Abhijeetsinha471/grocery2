import { useEffect, useState } from "react";
import Showdetain from "./GroceryList";
import "./App.css"
export default function Use_effect() {
  const [task, task_task] = useState("");
  const [alltask, add_new_task] = useState([]);
useEffect(()=>{
  fetch("http://localhost:3000/List")
  .then((x)=>x.json())
  .then((x)=>add_new_task(x))
},[alltask])
  const add = () => {
    if(task=="")
    return
   let  obj=  {
      
      "task": task,
      "status": "false"
    }

    fetch("http://localhost:3000/List",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })

    add_new_task([...alltask,task]);
    
    task_task("");
  };

  const remove = (i_n) => {
    console.log(alltask[i_n]);
    fetch(`http://localhost:3000/List/${i_n}`,{
      method:"DELETE",
      
      headers:{
        "Content-Type":"application/json"
      }
    })

    
  };

  return (
    <> <div className="san">
      <h1>Grocery_List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => task_task(e.target.value)}
      />
      <button className="button-30" onClick={add}>Add Item</button>
       {alltask.map((x, i) => {
        return <Showdetain item={x.task} id={x.id}  key={i} remove={remove} />;
      })}  

      </div>
    </>
  );
}