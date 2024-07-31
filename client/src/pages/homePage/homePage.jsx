import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const {currentUser} = useContext(AuthContext);

  console.log(currentUser);
  
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            corporis aut ex rem quod saepe sapiente. Deserunt dolorum minima
            modi sint quo fuga debitis accusantium, autem aliquam, ut
            consectetur. Harum.
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>15+</h1>
              <h2>Years of Exprience</h2>
            </div>
            <div className="box">
              <h1>150+</h1>
              <h2>Awards Wins</h2>
            </div>
            <div className="box">
              <h1>1100+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg1.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
