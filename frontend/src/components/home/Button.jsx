import { Link } from "react-router-dom";

function Button() {
  return (
    <button type="button" className="button">
      <Link to="/select">
        <button>
          <p>LETS GO</p>
        </button>
      </Link>
    </button>
  );
}

export default Button;
