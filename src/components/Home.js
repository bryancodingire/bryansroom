import { Link } from "react-router-dom";

const Home = () => {
    return <div>
        <h1>Welcome to the Game</h1>
        <ul>
          <li>
            <Link to="/">Rossmore</Link>
          </li>
          <li>
            <Link to="/bryansroom">Bryan's Room</Link>
          </li>
        </ul>
    </div>;
};

export default Home;