//81. Create a state that stores an array of user objects and displays them dynamically.

import { useState } from "react"



const Ex81 = () => {
     const [users, setUsers] = useState([
       {
         id: 1,
         name: "raj",
       },
       {
         id: 2,
         name: "Sahil",
       },
       {
         id: 3,
         name: "Saqib",
       },
     ]);

     const handleChange = (e) => {
          const value = e.target.value
          setUsers([
               ...users,
               value
          ])

          
     }

     const handleClick = () => {
          console.log(users);
     }
  return (
       <div>
            <input
                 onChange={handleChange}
                 type="text"
                 className="input"
                 placeholder="enter your name to show"
                 name={users.name}
                
            />
      <button onClick={handleClick} className="btn-primary m-2 ">Show</button>

      {users.map((user) => (
        <div>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Ex81
