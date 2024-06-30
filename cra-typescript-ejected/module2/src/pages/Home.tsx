import logo from "../logo.svg";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          App loaded from module 2. Click contact below to route to contact page
          from module 2.
        </p>
        <a className="App-link" href="/module2/contact">
          Contact
        </a>
      </header>
    </div>
  );
}

export default Home;
