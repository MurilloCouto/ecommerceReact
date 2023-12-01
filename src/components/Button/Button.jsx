import "./index.scss";
import { Link } from "react-router-dom";

const Button = ({ text, page }) => {
  return (
    <div>
      <button className="button">
        <Link to={page}>{text}</Link>
      </button>
    </div>
  );
};

export default Button;
