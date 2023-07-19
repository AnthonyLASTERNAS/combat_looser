import { Link } from "react-router-dom";

function Button() {
  return (
    <button type="submit" className="button">
      <Link to="./pages/Select.jsx">submit</Link>
    </button>
  );
}

export default Button;
