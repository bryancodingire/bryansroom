import { Link } from "react-router-dom";

function NotItem() {
  return (
    <div>

      <h1>
        Unfortunately you haven't found a hidden object
      </h1>
      <button><Link to="/bryansroom">Back To Map</Link></button>

    </div>
  );
}

export default NotItem;
