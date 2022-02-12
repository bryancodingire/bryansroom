import { Link } from "react-router-dom";

function CheckItem() {
  return (
    <div>

      <h1>
        Check if you have found hidden item
      </h1>
      <button><Link to="/founditem">Check if hidden item (true)</Link></button>
      <button><Link to="/notitem">Check if hidden item (false)</Link></button>

    </div>
  );
}

export default CheckItem;
