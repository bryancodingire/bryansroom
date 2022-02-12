import { Link } from "react-router-dom";

function BryansRoom() {
  return (
    <div>

      <h1>
        Bryan's Room
      </h1>
      <p>Map</p>
      <button><Link to="/checkitem">Check Item</Link></button>

    </div>
  );
}

export default BryansRoom;
