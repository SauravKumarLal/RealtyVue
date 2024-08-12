import { useContext, useEffect } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const text = document.querySelector(".homePage .wrapper p");
    text.classList.add("animate");

    return () => {
      text.classList.remove("animate");
    };
  }, []);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Discover a world where your dream home is just a click away.
            Whether you're buying or renting, explore a curated collection of
            properties tailored to fit your lifestyle. From modern apartments to
            charming homes, your ideal space awaits. Begin your journey with us,
            and let us help you turn your real estate dreams into reality.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>15+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>150+</h1>
              <h2>Awards Won</h2>
            </div>
            <div className="box">
              <h1>1100+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg1.png" alt="Real estate background" />
      </div>
    </div>
  );
}

export default HomePage;
