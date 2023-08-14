import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header className="top-nav">
        <nav>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/teams">Teams</a></li>
            <li><a href="/updates">Updates</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </nav>
      </header>
      {/* Other content of your app */}
    </div>
  );
}

export default App;
