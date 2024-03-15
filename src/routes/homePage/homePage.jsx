import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Shtaavarasampadah</h1>
          <p>
          Happiness & Joy !
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>19+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>900</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>5000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
