import { Link } from "react-router-dom";
import style from "./landing.module.css";

const Landing = () => {
  return (
      <div className={style.container}>
      <div >
        <h1 className={style}>Landing Page</h1>
        <Link to="/home">
          <button>Home 🏠</button>
        </Link>
      </div>
      </div>
  );
};

export default Landing;
