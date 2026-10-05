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
import Ex37 from "../exercises/Ex37";
import Ex38 from "../exercises/Ex38";
import Ex39 from "../exercises/Ex39";
import Ex40 from "../exercises/Ex40";
import Ex41 from "../exercises/Ex41";
import Ex42 from "../exercises/Ex42";
import Ex43 from "../exercises/Ex43";
import Ex44 from "../exercises/Ex44";
import Ex45 from "../exercises/Ex45";
import Ex46 from "../exercises/Ex46";
import Ex47 from "../exercises/Ex47";
import Ex48 from "../exercises/Ex48";
import Ex49 from "../exercises/Ex49";

import Ex5 from "../exercises/Ex5";
import Ex50 from "../exercises/Ex50";
import Ex51 from "../exercises/Ex51";
import Ex52 from "../exercises/Ex52";
import Ex54 from "../exercises/Ex54";
import Ex6 from "../exercises/Ex6";
import Ex61 from "../exercises/Ex61";
import Ex62 from "../exercises/Ex62";
import Ex63 from "../exercises/Ex63";
import Ex64 from "../exercises/Ex64";
import Ex65 from "../exercises/Ex65";
import Ex66 from "../exercises/Ex66";
import Ex67 from "../exercises/Ex67";
import Ex68 from "../exercises/Ex68";
import Ex69 from "../exercises/Ex69";
import Ex7 from "../exercises/Ex7";
import Ex70 from "../exercises/Ex70";
import Ex71 from "../exercises/Ex71";
import Ex72 from "../exercises/Ex72";
import Ex73 from "../exercises/Ex73";
import Ex75 from "../exercises/Ex75";
import Ex76 from "../exercises/Ex76";
import Ex77 from "../exercises/Ex77";
import Ex78 from "../exercises/Ex78";
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
  Ex36,
  Ex37,
  Ex38,
  Ex39,
  Ex40,
  Ex41,
  Ex42,
  Ex43,
  Ex44,
  Ex45,
  Ex46,
  Ex47,
  Ex48,
  Ex49,
  Ex50,
  Ex51,
  Ex52,
  Ex54,
  Ex61,
  Ex62,
  Ex63,
  Ex64,
  Ex65,
  Ex66,
  Ex67,
  Ex68,
  Ex69,
  Ex70,
  Ex71,
  Ex72,
  Ex73,
  Ex75,
  Ex76,
  Ex77,
  Ex78
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
