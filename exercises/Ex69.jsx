//69. Create a task manager where tasks are stored in an array and updated dynamically.

import { useState } from "react"



const Ex69 = () => {
     const [task, setTask] = useState(["task1", "task2", "task3", "task4"])
     const [edit, setEdit] = useState('')
     const handleEdit = (idx) => {
       // If the input field is empty, don't update to a blank task
       if (!edit.trim()) return;

       const updatedTasks = [...task];
       updatedTasks[idx] = edit; // Directly replace the element at the index with the input text

       setTask(updatedTasks);
       setEdit(""); // Clear the input field after updating
     }

     const handleDelete = (idxToDelete) => {
       setTask(task.filter((_, idx) => idx !== idxToDelete))
          
     }
  return (
       <div className="min-h-screen min-w-full">
            <input
                 type="text"
                 className="input"
                 placeholder="enter the task to update"
                 value={edit}
                 onChange={(e) => setEdit(e.target.value)}
            />
      {task
        .map((arr, idx) => (
          <div key={idx}>
            <div className="  p-2 flex items-center justify-between">
              <h1>{arr}</h1>
              <button className="btn-primary m-2" onClick={() => handleEdit(idx)}>Edit</button>
              <button className="btn-danger m-2" onClick={()=> handleDelete(idx)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Ex69
