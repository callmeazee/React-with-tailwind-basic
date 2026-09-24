import Ex1 from "../exercises/EX1";
import Ex10 from "../exercises/Ex10";
import Ex11 from "../exercises/Ex11";
import Ex12 from "../exercises/Ex12";
import Ex13 from "../exercises/Ex13";
import Ex14 from "../exercises/Ex14";
import Ex15 from "../exercises/Ex15";
import Ex16 from "../exercises/Ex16";
import Ex17 from "../exercises/Ex17";
import Ex18 from "../exercises/Ex18";
import Ex19 from "../exercises/Ex19";
import Ex2 from "../exercises/Ex2";
import Ex20 from "../exercises/Ex20";
import Ex22 from "../exercises/Ex22";
import Ex23 from "../exercises/Ex23";
import Ex25 from "../exercises/Ex25";
import Ex27 from "../exercises/Ex27";
import Ex3 from "../exercises/Ex3";
import Ex31 from "../exercises/Ex31";
import Ex32 from "../exercises/Ex32";
import Ex33 from "../exercises/Ex33";
import Ex34 from "../exercises/Ex34";
import Ex35 from "../exercises/Ex35";
import Ex36 from "../exercises/Ex36";

import Ex5 from "../exercises/Ex5";
import Ex6 from "../exercises/Ex6";
import Ex7 from "../exercises/Ex7";
import Ex8 from "../exercises/Ex8";
import Ex9 from "../exercises/Ex9";
const exercises = {
  Ex1,
  Ex2,
  Ex3,
  Ex5,
  Ex6,
  Ex7,
  Ex8,
  Ex9,
  Ex10,
  Ex11,
  Ex12,
  Ex13,
  Ex14,
  Ex15,
  Ex16,
  Ex17,
  Ex18,
  Ex19,
  Ex20,
  Ex22,
  Ex23,
  Ex25,
  Ex27,
  Ex31,
  Ex32,
  Ex33,
  Ex34,
  Ex35,
  Ex36
}

const App = () => {
  const exerciseName = window.location.pathname.slice(1);

  const Exercise = exercises[exerciseName];

  if (!Exercise) {
    return (
      <div>
        <h1>React Practice</h1>
        <p>Exercise not found.</p>
      </div>
    );
  }

  return <Exercise />;
}

export default App
