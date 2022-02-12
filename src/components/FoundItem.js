import { Link } from "react-router-dom";

function FoundItem() {
  return (
    <div>

      <h1>
        Success You have found a hidden Object
      </h1>
      <button><Link to="/bryansroom">Back To Map</Link></button>

    </div>
  );
}

export default FoundItem;
