//76. Build a component where users can reorder a list of items using drag-and-drop.

import { useState } from "react"


const Ex76 = () => {
  const [items, setItems] = useState([
    "Samsung",
    "Apple",
    "Vivo",
    "Nokia",
    "Motorola",
    "Oppo",
  ]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [draggedOverIndex, setDraggedOverIndex] = useState(null);

  //we will start by making three states 1: items, 2: draggedIndex, 3: draggedOverIndex
  // in html drggable will work on li and it has events drggable = true || draggable so it will give us some draggable events such as
  //onDragStart , onDragEnter, onDragOver, onDragEnd  for my refernce i named it SEO and then End
  /*
     Event	When does it trigger?	What do we do in React?
     onDragEnter	As you hover your dragged item over another item in the list.	We save where it's hovering: setDraggedOverIndex(index).
     onDragStart	The exact moment you click and start dragging an item.	We save which item index is moving: setDraggedIndex(index).
     onDragOver	Fires continuously while hovering over a valid drop target.	Crucial: We must call e.preventDefault(). Otherwise, the browser blocks dropping!
     onDragEnd	     The moment you let go of the mouse click to drop the item.	We rearrange the array items, update the list state, and reset our tracking indices back to null.
     */
     
     //now in the function when we start dragging with the help of splice we can destructure the new draggable item the and then add that in an array because splice gives us a new array and after all of that we set index to null and set the updated value to the items thats how its work

  const handleDrag = () => {
    if (draggedIndex === null || draggedOverIndex === null) return;

    const updatedItems = [...items];

    const [draggedContent] = updatedItems.splice(draggedIndex, 1);

    updatedItems.splice(draggedOverIndex, 0, draggedContent);

    setDraggedIndex(null);
    setDraggedOverIndex(null);
    setItems(updatedItems);
       
  };
  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx}>
          <li
            draggable
            onDragStart={() => setDraggedIndex(idx)}
            onDragEnter={() => setDraggedOverIndex(idx)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={handleDrag}>
            {item}
          </li>
          
        </div>
      ))}
    </div>
  );
}

export default Ex76
