import { useRef } from "react";
import "./Start.css";
const Start = ({ setFullName }) => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setFullName(inputRef.current.value);
  };

  return (
    <form className="start" onSubmit={handleClick}>
      <input
        className="startInput"
        placeholder="enter your full name"
        ref={inputRef}
      />
      <button className="startButton" type="submit">
        Start
      </button>
    </form>
  );
};

export default Start;
