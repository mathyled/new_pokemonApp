import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import style from "./home.module.css";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={style.root}>
        <SideBar></SideBar>
        <div>
          <SearchBar></SearchBar>
          <h1>Home Page</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
